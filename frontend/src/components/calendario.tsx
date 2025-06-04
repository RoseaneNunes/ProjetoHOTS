import { useState, useEffect, useCallback } from 'react';
import { Calendar, momentLocalizer, Views, Navigate } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { api, checkError } from '@/lib/api';
import { useAuth } from '@/context/contextAuth';
import { toast } from 'react-hot-toast';
import 'moment/locale/pt-br';
import { useRouter } from 'next/router';
import { DetalhesTarefa } from './detalhesTarefa';
import { CadastroTarefa } from './cadastroTarefa';
import { EditarTarefa } from './editarTarefa';

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

interface TarefaAPI {
    id: number;
    titulo: string;
    descricao: string | null;
    status: string;
    prioridade: string;
    data_criacao: string;
    data_limite: string | null;
    data_conclusao: string | null;
    tipo: string | null;
    agente_id: number | null;
    paciente_cpf: string | null;
    agente?: {
        id: number;
        nome: string;
    };
    paciente?: {
        cpf: string;
        nome: string;
    };
}

interface EventoCalendario {
    id: number;
    title: string;
    start: Date;
    end: Date;
    status: string;
    prioridade: string;
    descricao?: string;
    paciente?: string;
    agente?: string;
    allDay?: boolean;
    resource?: any;
}

interface CalendarioProps {
    visualizacaoAgente?: boolean;
}

export function Calendario({ visualizacaoAgente = true }: CalendarioProps) {
    const [eventos, setEventos] = useState<EventoCalendario[]>([]);
    const [tarefaSelecionada, setTarefaSelecionada] =
        useState<EventoCalendario | null>(null);
    const [modalAberto, setModalAberto] = useState(false);
    const [carregando, setCarregando] = useState(true);
    const { user, isLoggedIn } = useAuth();
    const router = useRouter();
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState(Views.MONTH);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [tarefaIdParaEditar, setTarefaIdParaEditar] = useState<number | null>(
        null
    );

    const buscarTarefas = async () => {
        try {
            if (!isLoggedIn()) {
                toast.error('Você precisa estar logado para ver as tarefas');
                router.push('/loginPage');
                return;
            }

            setCarregando(true);
            const response = await api.get<TarefaAPI[]>('/tarefas');

            let tarefas = response.data;
            if (visualizacaoAgente && user?.id) {
                tarefas = tarefas.filter(
                    (tarefa) => tarefa.agente_id === user.id
                );
            }

            const eventosCalendario = tarefas
                .filter((tarefa) => {
                    try {
                        const dataInicio = tarefa.data_limite
                            ? new Date(tarefa.data_limite)
                            : new Date(tarefa.data_criacao);

                        // Verificar se a data é válida
                        if (isNaN(dataInicio.getTime())) {
                            console.warn(
                                `Tarefa ${tarefa.id} com data inválida`
                            );
                            return false;
                        }

                        const hoje = new Date();
                        const dezAnosAtras = new Date(hoje);
                        dezAnosAtras.setFullYear(hoje.getFullYear() - 10);

                        const dezAnosFrente = new Date(hoje);
                        dezAnosFrente.setFullYear(hoje.getFullYear() + 10);

                        if (
                            dataInicio < dezAnosAtras ||
                            dataInicio > dezAnosFrente
                        ) {
                            console.warn(
                                `Tarefa ${tarefa.id} com data fora do intervalo permitido`
                            );
                            return false;
                        }

                        return true;
                    } catch (e) {
                        console.error(
                            `Erro ao processar data da tarefa ${tarefa.id}:`,
                            e
                        );
                        return false;
                    }
                })
                .map((tarefa) => {
                    // Criar eventos com datas seguras
                    const dataInicio = tarefa.data_limite
                        ? new Date(tarefa.data_limite)
                        : new Date(tarefa.data_criacao);

                    const dataFim = new Date(dataInicio);
                    dataFim.setHours(dataFim.getHours() + 1);

                    return {
                        id: tarefa.id,
                        title: tarefa.titulo,
                        start: dataInicio,
                        end: dataFim,
                        status: tarefa.status,
                        prioridade: tarefa.prioridade,
                        descricao: tarefa.descricao || undefined,
                        paciente: tarefa.paciente?.nome,
                        agente: tarefa.agente?.nome,
                        allDay: false,
                        resource: tarefa,
                    };
                });

            const MAX_EVENTOS = 100;
            const eventosLimitados = eventosCalendario.slice(0, MAX_EVENTOS);

            if (eventosCalendario.length > MAX_EVENTOS) {
                console.warn(
                    `Exibindo apenas ${MAX_EVENTOS} de ${eventosCalendario.length} tarefas para evitar problemas de memória`
                );
            }

            setEventos(eventosLimitados);
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            checkError(
                error,
                (message) => toast.error(message),
                () => toast.error('Não foi possível carregar as tarefas')
            );
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        if (user?.id) {
            buscarTarefas();
        }
    }, [user?.id, visualizacaoAgente]);

    const eventStyleGetter = (event: EventoCalendario) => {
        let backgroundColor = '#3174ad'; // Cor padrão

        // Cores baseadas na prioridade
        if (event.prioridade === 'alta') {
            backgroundColor = '#dc3545'; // Vermelho para alta prioridade
        } else if (event.prioridade === 'media') {
            backgroundColor = '#ffc107'; // Amarelo para média prioridade
        } else if (event.prioridade === 'baixa') {
            backgroundColor = '#28a745'; // Verde para baixa prioridade
        }

        // Se a tarefa estiver concluída, alterar aparência
        if (event.status === 'concluida') {
            backgroundColor = '#6c757d'; // Cinza para tarefas concluídas
        }

        return {
            style: {
                backgroundColor,
                borderRadius: '4px',
                opacity: 0.8,
                color: 'white',
                border: '0px',
                display: 'block',
            },
        };
    };

    const handleSelectEvent = (event: EventoCalendario) => {
        setTarefaSelecionada(event);
        setModalAberto(true);
    };

    const concluirTarefa = async (id: number) => {
        try {
            await api.put(`http://localhost:3333/api/tarefas/${id}`, {
                status: 'concluida',
                data_conclusao: new Date().toISOString(),
            });
            toast.success('Tarefa marcada como concluída!');
            setModalAberto(false);
            // Recarregar tarefas após concluir
            buscarTarefas();
        } catch (error) {
            console.error('Erro ao concluir tarefa:', error);
            toast.error('Erro ao concluir a tarefa');
        }
    };

    const editarTarefa = (id: number) => {
        setTarefaIdParaEditar(id);
        setModalAberto(false);
        setModoEdicao(true);
    };

    // Funções de navegação manual
    const navigateCalendar = useCallback(
        (action: Navigate) => {
            const newDate = new Date(date);

            switch (action) {
                case Navigate.PREVIOUS:
                    if (view === Views.MONTH) {
                        newDate.setMonth(date.getMonth() - 1);
                    } else if (view === Views.WEEK) {
                        newDate.setDate(date.getDate() - 7);
                    } else if (view === Views.DAY) {
                        newDate.setDate(date.getDate() - 1);
                    }
                    break;
                case Navigate.NEXT:
                    if (view === Views.MONTH) {
                        newDate.setMonth(date.getMonth() + 1);
                    } else if (view === Views.WEEK) {
                        newDate.setDate(date.getDate() + 7);
                    } else if (view === Views.DAY) {
                        newDate.setDate(date.getDate() + 1);
                    }
                    break;
                case Navigate.TODAY:
                    return setDate(new Date());
                default:
                    return;
            }

            setDate(newDate);
        },
        [date, view]
    );

    // Função para mudar a visualização
    const handleViewChange = useCallback((newView: string) => {
        setView(newView);
    }, []);

    const excluirTarefa = async (id: number) => {
        try {
            await api.delete(`/tarefas/${id}`);
            toast.success('Tarefa excluída com sucesso!');
            setModalAberto(false);
            // Recarregar tarefas após excluir
            buscarTarefas();
        } catch (error) {
            console.error('Erro ao excluir tarefa:', error);
            checkError(
                error,
                (message) => toast.error(message),
                () => toast.error('Erro ao excluir a tarefa')
            );
        }
    };

    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-[#00473e]">
                    Agenda de{' '}
                    {visualizacaoAgente ? 'Minhas Tarefas' : 'Todas as Tarefas'}
                </h2>

                {/* Botão para adicionar nova tarefa */}
                <CadastroTarefa onTarefaCadastrada={buscarTarefas} />
            </div>

            {carregando ? (
                <div className="flex justify-center items-center h-64">
                    <p>Carregando agenda...</p>
                </div>
            ) : eventos.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-64 text-gray-500">
                    <p>Nenhuma tarefa encontrada.</p>
                    <p className="text-sm mt-2">
                        Clique em "Nova Tarefa" para criar uma.
                    </p>
                </div>
            ) : (
                <div className="flex-grow flex flex-col bg-white rounded-lg p-2 overflow-hidden">
                    {/* Barra de navegação personalizada */}
                    <div className="flex flex-col justify-between items-center mb-2 p-2 bg-gray-100 rounded">
                        <div className="flex gap-1">
                            <button
                                onClick={() =>
                                    navigateCalendar(Navigate.PREVIOUS)
                                }
                                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50">
                                Anterior
                            </button>
                            <button
                                onClick={() => navigateCalendar(Navigate.TODAY)}
                                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50">
                                Hoje
                            </button>
                            <button
                                onClick={() => navigateCalendar(Navigate.NEXT)}
                                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50">
                                Próximo
                            </button>
                        </div>

                        <div className="font-semibold">
                            {view === Views.MONTH &&
                                moment(date).format('MMMM YYYY')}
                            {view === Views.WEEK &&
                                `Semana de ${moment(date).format(
                                    'DD/MM/YYYY'
                                )}`}
                            {view === Views.DAY &&
                                moment(date).format('DD [de] MMMM [de] YYYY')}
                            {view === Views.AGENDA && 'Agenda'}
                        </div>

                        <div className="flex gap-1">
                            <button
                                onClick={() => handleViewChange(Views.MONTH)}
                                className={`px-3 py-1 border border-gray-300 rounded ${
                                    view === Views.MONTH
                                        ? 'bg-[#faae2b] text-[#00473e]'
                                        : 'bg-white'
                                }`}>
                                Mês
                            </button>
                            <button
                                onClick={() => handleViewChange(Views.WEEK)}
                                className={`px-3 py-1 border border-gray-300 rounded ${
                                    view === Views.WEEK
                                        ? 'bg-[#faae2b] text-[#00473e]'
                                        : 'bg-white'
                                }`}>
                                Semana
                            </button>
                            <button
                                onClick={() => handleViewChange(Views.DAY)}
                                className={`px-3 py-1 border border-gray-300 rounded ${
                                    view === Views.DAY
                                        ? 'bg-[#faae2b] text-[#00473e]'
                                        : 'bg-white'
                                }`}>
                                Dia
                            </button>
                            <button
                                onClick={() => handleViewChange(Views.AGENDA)}
                                className={`px-3 py-1 border border-gray-300 rounded ${
                                    view === Views.AGENDA
                                        ? 'bg-[#faae2b] text-[#00473e]'
                                        : 'bg-white'
                                }`}>
                                Lista
                            </button>
                        </div>
                    </div>

                    {/* Calendário controlado */}
                    <div className="flex-grow overflow-auto">
                        <Calendar
                            localizer={localizer}
                            events={eventos}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 450 }} // Reduzido um pouco para acomodar a nova barra
                            className="calendar-custom"
                            eventPropGetter={eventStyleGetter}
                            onSelectEvent={handleSelectEvent}
                            date={date}
                            view={view}
                            onNavigate={setDate}
                            onView={setView}
                            toolbar={false} // Desativar a barra de ferramentas interna
                            length={30}
                            min={new Date(2000, 0, 1, 7, 0)} // Começa às 7:00
                            max={new Date(2000, 0, 1, 21, 0)} // Termina às 21:00
                            messages={{
                                next: 'Próximo',
                                previous: 'Anterior',
                                today: 'Hoje',
                                month: 'Mês',
                                week: 'Semana',
                                day: 'Dia',
                                agenda: 'Lista',
                                date: 'Data',
                                time: 'Hora',
                                event: 'Evento',
                                noEventsInRange:
                                    'Não há tarefas neste período.',
                            }}
                        />
                    </div>
                </div>
            )}

            <DetalhesTarefa
                tarefa={tarefaSelecionada}
                aberto={modalAberto}
                onFechar={() => setModalAberto(false)}
                onEditar={editarTarefa}
                onConcluir={concluirTarefa}
                onExcluir={excluirTarefa}
            />

            <EditarTarefa
                tarefaId={tarefaIdParaEditar}
                aberto={modoEdicao}
                onFechar={() => {
                    setModoEdicao(false);
                    setTarefaIdParaEditar(null);
                }}
                onTarefaEditada={() => {
                    buscarTarefas();
                }}
            />
        </div>
    );
}
