import { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/contextAuth';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface Paciente {
    cpf: string;
    nome: string;
}

interface Tarefa {
    id: number;
    titulo: string;
    descricao?: string | null;
    status: string;
    prioridade: string;
    data_limite?: string | null;
    tipo?: string | null;
    paciente_cpf?: string | null;
    agente_id?: number | null;
}

interface EditarTarefaProps {
    tarefaId: number | null;
    aberto: boolean;
    onFechar: () => void;
    onTarefaEditada: () => void;
}

const tarefaSchema = z.object({
    titulo: z.string().nonempty('O título é obrigatório'),
    descricao: z.string().optional().nullable(),
    status: z.string(),
    prioridade: z.string(),
    data_limite: z.string().optional().nullable(),
    tipo: z.string().optional().nullable(),
    paciente_cpf: z.string().optional().nullable(),
});

type TarefaSchema = z.infer<typeof tarefaSchema>;

export function EditarTarefa({ tarefaId, aberto, onFechar, onTarefaEditada }: EditarTarefaProps) {
    const [carregando, setCarregando] = useState(true);
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<TarefaSchema>({
        resolver: zodResolver(tarefaSchema),
        defaultValues: {
            titulo: '',
            descricao: '',
            status: 'pendente',
            prioridade: 'media',
            data_limite: '',
            tipo: '',
            paciente_cpf: '',
        },
    });

    useEffect(() => {
        const buscarTarefa = async () => {
            if (!tarefaId || !aberto) return;

            try {
                setCarregando(true);
                const response = await api.get<Tarefa>(`/tarefas/${tarefaId}`);
                const tarefa = response.data;

                setValue('titulo', tarefa.titulo);
                setValue('descricao', tarefa.descricao || '');
                setValue('status', tarefa.status);
                setValue('prioridade', tarefa.prioridade);

                if (tarefa.data_limite) {
                    const dataLimite = new Date(tarefa.data_limite);
                    const dataFormatada = dataLimite.toISOString().slice(0, 16);
                    setValue('data_limite', dataFormatada);
                } else {
                    setValue('data_limite', null);
                }

                setValue('tipo', tarefa.tipo || '');
                setValue('paciente_cpf', tarefa.paciente_cpf || '');

                buscarPacientes();
            } catch (error) {
                console.error('Erro ao buscar tarefa:', error);
                toast.error('Não foi possível carregar os dados da tarefa');
                onFechar();
            } finally {
                setCarregando(false);
            }
        };

        buscarTarefa();
    }, [tarefaId, aberto, setValue]);

    const buscarPacientes = async () => {
        try {
            const response = await api.get<Paciente[]>('/pacientes');
            let pacientesFiltrados = response.data;

            if (user?.cargo === 'AGT' && user?.id) {
                pacientesFiltrados = pacientesFiltrados.filter(
                    (p) => p.agente_id === user.id
                );
            }

            setPacientes(pacientesFiltrados);
        } catch (error) {
            console.error('Erro ao buscar pacientes:', error);
            toast.error('Erro ao carregar lista de pacientes');
        }
    };

    const handleEditarTarefa = async (data: TarefaSchema) => {
        if (!tarefaId) return;

        try {
            await api.put(`/tarefas/${tarefaId}`, data);
            toast.success('Tarefa atualizada com sucesso!');
            onTarefaEditada();
            onFechar();
        } catch (error: any) {
            console.error('Erro ao atualizar tarefa:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao atualizar tarefa. Tente novamente.');
            }
        }
    };

    const commonInputClassName = 'w-full h-10 px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#faae2b] focus:border-[#faae2b]';
    const errorRingClassName = 'ring-2 ring-red-500 border-red-500';
    const labelClassName = 'block text-sm font-medium text-gray-300 mb-1';

    return (
        <Dialog open={aberto} onOpenChange={onFechar}>
            <DialogContent className="bg-gray-800 text-white sm:max-w-lg p-6 max-h-[85vh] flex flex-col">
                <DialogHeader className="mb-4 flex-shrink-0">
                    <DialogTitle className="text-xl font-semibold text-center">
                        Editar Tarefa
                    </DialogTitle>
                </DialogHeader>

                {carregando ? (
                    <div className="flex justify-center items-center py-8">
                        <p>Carregando dados da tarefa...</p>
                    </div>
                ) : (
                    <div className="flex-grow overflow-y-auto pr-2">
                        <form onSubmit={handleSubmit(handleEditarTarefa)} className="space-y-4 mt-4">
                            <div>
                                <label htmlFor="titulo" className={labelClassName}>
                                    Título da Tarefa
                                </label>
                                <Input
                                    id="titulo"
                                    className={`${commonInputClassName} ${errors.titulo ? errorRingClassName : ''}`}
                                    placeholder="Título da tarefa"
                                    disabled={isSubmitting}
                                    {...register('titulo')}
                                />
                                {errors.titulo && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.titulo.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="descricao" className={labelClassName}>
                                    Descrição
                                </label>
                                <Textarea
                                    id="descricao"
                                    className={`${commonInputClassName} min-h-[80px]`}
                                    placeholder="Descreva os detalhes da tarefa"
                                    disabled={isSubmitting}
                                    {...register('descricao')}
                                />
                            </div>

                            <div>
                                <label htmlFor="status" className={labelClassName}>
                                    Status
                                </label>
                                <Controller
                                    name="status"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            disabled={isSubmitting}
                                        >
                                            <SelectTrigger id="status" className={commonInputClassName}>
                                                <SelectValue placeholder="Selecione o status" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-700 text-white border-gray-600">
                                                <SelectGroup>
                                                    <SelectItem value="pendente">Pendente</SelectItem>
                                                    <SelectItem value="em andamento">Em Andamento</SelectItem>
                                                    <SelectItem value="concluida">Concluída</SelectItem>
                                                    <SelectItem value="cancelada">Cancelada</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            <div>
                                <label htmlFor="prioridade" className={labelClassName}>
                                    Prioridade
                                </label>
                                <Controller
                                    name="prioridade"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            disabled={isSubmitting}
                                        >
                                            <SelectTrigger id="prioridade" className={commonInputClassName}>
                                                <SelectValue placeholder="Selecione a prioridade" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-700 text-white border-gray-600">
                                                <SelectGroup>
                                                    <SelectItem value="baixa">Baixa</SelectItem>
                                                    <SelectItem value="media">Média</SelectItem>
                                                    <SelectItem value="alta">Alta</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            <div>
                                <label htmlFor="data_limite" className={labelClassName}>
                                    Data Limite
                                </label>
                                <Input
                                    id="data_limite"
                                    type="datetime-local"
                                    className={commonInputClassName}
                                    disabled={isSubmitting}
                                    {...register('data_limite')}
                                />
                            </div>

                            <div>
                                <label htmlFor="tipo" className={labelClassName}>
                                    Tipo de Tarefa
                                </label>
                                <Controller
                                    name="tipo"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value || ''}
                                            onValueChange={field.onChange}
                                            disabled={isSubmitting}
                                        >
                                            <SelectTrigger id="tipo" className={commonInputClassName}>
                                                <SelectValue placeholder="Selecione o tipo" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-700 text-white border-gray-600">
                                                <SelectGroup>
                                                    <SelectItem value="visita">Visita Domiciliar</SelectItem>
                                                    <SelectItem value="consulta">Consulta</SelectItem>
                                                    <SelectItem value="medicacao">Medicação</SelectItem>
                                                    <SelectItem value="exame">Exame</SelectItem>
                                                    <SelectItem value="outro">Outro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            <div>
                                <label htmlFor="paciente_cpf" className={labelClassName}>
                                    Paciente Relacionado
                                </label>
                                <Controller
                                    name="paciente_cpf"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value || ''}
                                            onValueChange={field.onChange}
                                            disabled={isSubmitting}
                                        >
                                            <SelectTrigger id="paciente_cpf" className={commonInputClassName}>
                                                <SelectValue placeholder="Selecione um paciente (opcional)" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-700 text-white border-gray-600">
                                                <SelectGroup>
                                                    {pacientes.map((paciente) => (
                                                        <SelectItem key={paciente.cpf} value={paciente.cpf}>
                                                            {paciente.nome}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            <div className="flex justify-end space-x-2 pt-4">
                                <button
                                    type="button"
                                    onClick={onFechar}
                                    disabled={isSubmitting}
                                    className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 focus:ring-2 focus:ring-gray-400"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-40 h-11 flex-shrink-0 bg-[#faae2b] text-gray-900 font-semibold rounded-lg hover:bg-amber-500 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
