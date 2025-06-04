import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
    ClipboardList,
    ChevronDown,
    ChevronUp,
    Edit,
    Trash2,
    AlertTriangle,
} from 'lucide-react';
import { EditarPaciente } from './editarPaciente';
import { toast } from 'react-hot-toast';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Paciente {
    cpf: string;
    nome: string;
    endereco: string;
    comorbidades?: string;
    situacao?: string;
    agente_id?: number;
    microarea_id?: number;
    agente?: {
        id: number;
        nome: string;
    } | null;
    microarea?: {
        id: number;
        nome: string;
    } | null;
}

interface Tarefa {
    id: number;
    titulo: string;
    status: string;
    prioridade: string;
    data_limite: string | null;
    data_criacao: string;
}

interface PacientecardProps {
    search: string;
    pacientes: Paciente[];
    onPacienteAtualizado: () => void;
}

export function Pacientecard({
    search,
    pacientes,
    onPacienteAtualizado,
}: PacientecardProps) {
    const [tarefasPorPaciente, setTarefasPorPaciente] = useState<
        Record<string, Tarefa[]>
    >({});
    const [expandido, setExpandido] = useState<Record<string, boolean>>({});
    const [modoEdicao, setModoEdicao] = useState(false);
    const [pacienteCpfParaEditar, setPacienteCpfParaEditar] = useState<
        string | null
    >(null);
    const [exclusaoDialogAberto, setExclusaoDialogAberto] = useState(false);
    const [pacienteParaExcluir, setPacienteParaExcluir] =
        useState<Paciente | null>(null);
    const [excluindo, setExcluindo] = useState(false);

    const pacientesFiltrados = pacientes.filter(
        (paciente) =>
            paciente.nome.toLowerCase().includes(search.toLowerCase()) ||
            paciente.cpf.includes(search)
    );

    const formatarCPF = (cpf: string) => {
        if (!cpf) return '';
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11) return cpf;
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
            6,
            9
        )}-${cpf.slice(9, 11)}`;
    };

    const formatarData = (dataString: string | null) => {
        if (!dataString) return 'Não definida';
        const data = new Date(dataString);
        return format(data, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
    };

    // Função para obter a cor baseada na prioridade
    const getCorPrioridade = (prioridade: string) => {
        switch (prioridade.toLowerCase()) {
            case 'alta':
                return 'text-red-600 font-semibold';
            case 'media':
                return 'text-yellow-600 font-semibold';
            case 'baixa':
                return 'text-green-600 font-semibold';
            default:
                return 'text-gray-600';
        }
    };

    // Função para obter a cor baseada no status
    const getCorStatus = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pendente':
                return 'text-yellow-600 font-semibold';
            case 'em andamento':
                return 'text-blue-600 font-semibold';
            case 'concluida':
            case 'concluída':
                return 'text-green-600 font-semibold';
            case 'cancelada':
                return 'text-red-600 font-semibold';
            default:
                return 'text-gray-600';
        }
    };

    // Função para buscar tarefas de um paciente
    const buscarTarefasDoPaciente = async (cpf: string) => {
        try {
            const response = await api.get<Tarefa[]>(
                `/tarefas?paciente_cpf=${cpf}`
            );
            setTarefasPorPaciente((prev) => ({
                ...prev,
                [cpf]: response.data,
            }));
        } catch (error) {
            console.error(`Erro ao buscar tarefas do paciente ${cpf}:`, error);
        }
    };

    // Função para alternar a expansão do card
    const toggleExpansao = (cpf: string) => {
        // Se não existirem tarefas para este paciente, buscar
        if (!tarefasPorPaciente[cpf]) {
            buscarTarefasDoPaciente(cpf);
        }

        setExpandido((prev) => ({
            ...prev,
            [cpf]: !prev[cpf],
        }));
    };

    // Função para abrir o modal de edição
    const editarPaciente = (cpf: string) => {
        setPacienteCpfParaEditar(cpf);
        setModoEdicao(true);
    };

    // Função para confirmar exclusão
    const confirmarExclusao = (paciente: Paciente) => {
        setPacienteParaExcluir(paciente);
        setExclusaoDialogAberto(true);
    };

    // Função para excluir paciente
    const excluirPaciente = async () => {
        if (!pacienteParaExcluir) return;

        try {
            setExcluindo(true);
            await api.delete(`/pacientes/${pacienteParaExcluir.cpf}`);
            toast.success('Paciente excluído com sucesso!');
            setExclusaoDialogAberto(false);
            onPacienteAtualizado(); // Atualizar lista de pacientes
        } catch (error: any) {
            console.error('Erro ao excluir paciente:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao excluir paciente. Tente novamente.');
            }
        } finally {
            setExcluindo(false);
        }
    };

    if (pacientesFiltrados.length === 0 && search) {
        return (
            <p className="text-center text-gray-500 mt-6">
                Nenhum paciente encontrado para "{search}".
            </p>
        );
    }

    if (pacientes.length === 0 && !search) {
        return (
            <p className="text-center text-gray-500 mt-6">
                Nenhum paciente cadastrado ainda.
            </p>
        );
    }

    return (
        <>
            <div className="grid gap-4 mt-6 justify-center">
                {pacientesFiltrados.map((paciente) => (
                    <div
                        key={paciente.cpf}
                        className="p-4 bg-white w-[38vw] shadow-md rounded-xl text-gray-700">
                        <div className="flex justify-between items-start">
                            <h2 className="text-lg font-bold text-teal-700 mb-2">
                                Paciente
                            </h2>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => editarPaciente(paciente.cpf)}
                                    className="p-1 text-teal-600 hover:text-teal-800 hover:bg-gray-100 rounded-full"
                                    title="Editar paciente">
                                    <Edit size={18} />
                                </button>
                                <button
                                    onClick={() => confirmarExclusao(paciente)}
                                    className="p-1 text-red-600 hover:text-red-800 hover:bg-gray-100 rounded-full"
                                    title="Excluir paciente">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                        <p>
                            <strong>Nome:</strong> {paciente.nome}
                        </p>
                        <p>
                            <strong>CPF:</strong> {formatarCPF(paciente.cpf)}
                        </p>
                        <p>
                            <strong>Endereço:</strong> {paciente.endereco}
                        </p>
                        <p>
                            <strong>Comorbidades:</strong>{' '}
                            {paciente.comorbidades || 'Nenhuma'}
                        </p>
                        <p>
                            <strong>Situação:</strong>{' '}
                            {paciente.situacao || 'Não especificada'}
                        </p>
                        <p>
                            <strong>Agente Responsável:</strong>{' '}
                            {paciente.agente?.nome || 'Não atribuído'}
                        </p>
                        <p>
                            <strong>Microárea:</strong>{' '}
                            {paciente.microarea?.nome || 'Não atribuída'}
                        </p>

                        {/* Botão para expandir/colapsar as tarefas */}
                        <button
                            onClick={() => toggleExpansao(paciente.cpf)}
                            className="mt-3 flex items-center gap-1 text-teal-700 hover:text-teal-900 font-medium">
                            <ClipboardList size={16} />
                            Tarefas relacionadas
                            {expandido[paciente.cpf] ? (
                                <ChevronUp size={16} />
                            ) : (
                                <ChevronDown size={16} />
                            )}
                        </button>

                        {/* Lista de tarefas expandível */}
                        {expandido[paciente.cpf] && (
                            <div className="mt-2 border-t pt-2">
                                {!tarefasPorPaciente[paciente.cpf] ? (
                                    <p className="text-sm text-gray-500">
                                        Carregando tarefas...
                                    </p>
                                ) : tarefasPorPaciente[paciente.cpf].length ===
                                  0 ? (
                                    <p className="text-sm text-gray-500">
                                        Nenhuma tarefa encontrada para este
                                        paciente.
                                    </p>
                                ) : (
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-teal-700">
                                            Tarefas:
                                        </h3>
                                        {tarefasPorPaciente[paciente.cpf].map(
                                            (tarefa) => (
                                                <div
                                                    key={tarefa.id}
                                                    className="bg-gray-50 p-2 rounded border border-gray-200">
                                                    <p className="font-medium">
                                                        {tarefa.titulo}
                                                    </p>
                                                    <div className="text-sm grid grid-cols-2 gap-x-2">
                                                        <p>
                                                            <span className="text-gray-600">
                                                                Status:
                                                            </span>{' '}
                                                            <span
                                                                className={getCorStatus(
                                                                    tarefa.status
                                                                )}>
                                                                {tarefa.status
                                                                    .charAt(0)
                                                                    .toUpperCase() +
                                                                    tarefa.status.slice(
                                                                        1
                                                                    )}
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span className="text-gray-600">
                                                                Prioridade:
                                                            </span>{' '}
                                                            <span
                                                                className={getCorPrioridade(
                                                                    tarefa.prioridade
                                                                )}>
                                                                {tarefa.prioridade
                                                                    .charAt(0)
                                                                    .toUpperCase() +
                                                                    tarefa.prioridade.slice(
                                                                        1
                                                                    )}
                                                            </span>
                                                        </p>
                                                        <p className="col-span-2">
                                                            <span className="text-gray-600">
                                                                Data limite:
                                                            </span>{' '}
                                                            {formatarData(
                                                                tarefa.data_limite
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal de edição de paciente */}
            <EditarPaciente
                cpf={pacienteCpfParaEditar}
                aberto={modoEdicao}
                onFechar={() => {
                    setModoEdicao(false);
                    setPacienteCpfParaEditar(null);
                }}
                onPacienteEditado={() => {
                    onPacienteAtualizado();
                }}
            />

            {/* Diálogo de confirmação de exclusão */}
            <Dialog
                open={exclusaoDialogAberto}
                onOpenChange={setExclusaoDialogAberto}>
                <DialogContent className="bg-white text-gray-800">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-red-600">
                            <AlertTriangle size={20} />
                            Confirmar exclusão
                        </DialogTitle>
                        <DialogDescription>
                            Você está prestes a excluir o paciente{' '}
                            <strong>{pacienteParaExcluir?.nome}</strong>. Esta
                            ação não pode ser desfeita.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="py-3">
                        <p className="text-gray-700">
                            Todas as informações do paciente serão removidas
                            permanentemente do sistema.
                        </p>
                        {tarefasPorPaciente[pacienteParaExcluir?.cpf || '']
                            ?.length > 0 && (
                            <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800 text-sm">
                                <p className="flex items-center gap-1">
                                    <AlertTriangle size={16} />
                                    <strong>Atenção:</strong> Este paciente
                                    possui tarefas associadas que também serão
                                    excluídas.
                                </p>
                            </div>
                        )}
                    </div>

                    <DialogFooter className="flex justify-end space-x-2">
                        <Button
                            onClick={() => setExclusaoDialogAberto(false)}
                            className="border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                            disabled={excluindo}>
                            Cancelar
                        </Button>
                        <Button
                            onClick={excluirPaciente}
                            className="bg-red-600 hover:bg-red-700 text-white"
                            disabled={excluindo}>
                            {excluindo ? 'Excluindo...' : 'Excluir Paciente'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
