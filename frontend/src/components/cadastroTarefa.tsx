import { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/contextAuth';
import { PlusIcon } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
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
import { Button } from '@/components/ui/button';

// Interface para pacientes (para o select)
interface Paciente {
    cpf: string;
    nome: string;
}

// Interface para props do componente
interface CadastroTarefaProps {
    onTarefaCadastrada: () => void;
}

// Schema de validação com Zod
const tarefaSchema = z.object({
    titulo: z.string().nonempty('O título é obrigatório'),
    descricao: z.string().optional(),
    prioridade: z.string().default('media'),
    data_limite: z.string().optional(),
    tipo: z.string().optional(),
    paciente_cpf: z.string().optional(),
});

type TarefaSchema = z.infer<typeof tarefaSchema>;

export function CadastroTarefa({ onTarefaCadastrada }: CadastroTarefaProps) {
    const [open, setOpen] = useState(false);
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = useForm<TarefaSchema>({
        resolver: zodResolver(tarefaSchema),
        defaultValues: {
            titulo: '',
            descricao: '',
            prioridade: 'media',
            data_limite: '',
            tipo: '',
            paciente_cpf: '',
        },
    });

    // Buscar pacientes para o select
    useEffect(() => {
        const buscarPacientes = async () => {
            try {
                // Se for um agente, buscar apenas seus pacientes
                const response = await api.get<Paciente[]>(
                    'http://localhost:3333/api/pacientes'
                );
                let pacientesFiltrados = response.data;

                // Se o usuário for agente, filtrar pacientes dele
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

        if (open) {
            buscarPacientes();
        }
    }, [open, user]);

    // Função para cadastrar nova tarefa
    const handleCadastrarTarefa = async (data: TarefaSchema) => {
        try {
            // Preparar dados para envio
            const payload = {
                ...data,
                status: 'pendente',
                agente_id: user?.id, // Associar ao agente logado
            };

            await api.post('http://localhost:3333/api/tarefas', payload);
            toast.success('Tarefa cadastrada com sucesso!');
            onTarefaCadastrada(); // Callback para atualizar lista de tarefas
            setOpen(false);
            reset(); // Limpar formulário
        } catch (error: any) {
            console.error('Erro ao cadastrar tarefa:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao cadastrar tarefa. Tente novamente.');
            }
        }
    };

    const commonInputClassName =
        'w-full h-10 px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#faae2b] focus:border-[#faae2b]';
    const errorRingClassName = 'ring-2 ring-red-500 border-red-500';
    const labelClassName = 'block text-sm font-medium text-gray-300 mb-1';

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="bg-[#faae2b] hover:bg-amber-500 text-gray-900 rounded-md flex items-center gap-1 px-3 py-2 font-medium">
                    <PlusIcon size={16} />
                    <span>Nova Tarefa</span>
                </button>
            </DialogTrigger>

            <DialogContent className="bg-gray-800 text-white sm:max-w-lg p-6 max-h-[85vh] flex flex-col">
                <DialogHeader className="mb-4 flex-shrink-0">
                    <DialogTitle className="text-xl font-semibold text-center">
                        Cadastrar Nova Tarefa
                    </DialogTitle>
                </DialogHeader>

                <div className="flex-grow overflow-y-auto pr-2">
                    <form
                        onSubmit={handleSubmit(handleCadastrarTarefa)}
                        className="space-y-4 mt-4">
                        {/* Título */}
                        <div>
                            <label htmlFor="titulo" className={labelClassName}>
                                Título da Tarefa
                            </label>
                            <Input
                                id="titulo"
                                className={`${commonInputClassName} ${
                                    errors.titulo ? errorRingClassName : ''
                                }`}
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

                        {/* Descrição */}
                        <div>
                            <label
                                htmlFor="descricao"
                                className={labelClassName}>
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

                        {/* Prioridade */}
                        <div>
                            <label
                                htmlFor="prioridade"
                                className={labelClassName}>
                                Prioridade
                            </label>
                            <Controller
                                name="prioridade"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        disabled={isSubmitting}>
                                        <SelectTrigger
                                            id="prioridade"
                                            className={commonInputClassName}>
                                            <SelectValue placeholder="Selecione a prioridade" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="baixa">
                                                    Baixa
                                                </SelectItem>
                                                <SelectItem value="media">
                                                    Média
                                                </SelectItem>
                                                <SelectItem value="alta">
                                                    Alta
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>

                        {/* Data Limite */}
                        <div>
                            <label
                                htmlFor="data_limite"
                                className={labelClassName}>
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

                        {/* Tipo */}
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
                                        disabled={isSubmitting}>
                                        <SelectTrigger
                                            id="tipo"
                                            className={commonInputClassName}>
                                            <SelectValue placeholder="Selecione o tipo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="visita">
                                                    Visita Domiciliar
                                                </SelectItem>
                                                <SelectItem value="consulta">
                                                    Consulta
                                                </SelectItem>
                                                <SelectItem value="medicacao">
                                                    Medicação
                                                </SelectItem>
                                                <SelectItem value="exame">
                                                    Exame
                                                </SelectItem>
                                                <SelectItem value="outro">
                                                    Outro
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>

                        {/* Paciente */}
                        <div>
                            <label
                                htmlFor="paciente_cpf"
                                className={labelClassName}>
                                Paciente Relacionado
                            </label>
                            <Controller
                                name="paciente_cpf"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        value={field.value || ''}
                                        onValueChange={field.onChange}
                                        disabled={isSubmitting}>
                                        <SelectTrigger
                                            id="paciente_cpf"
                                            className={commonInputClassName}>
                                            <SelectValue placeholder="Selecione um paciente (opcional)" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {pacientes.map((paciente) => (
                                                    <SelectItem
                                                        key={paciente.cpf}
                                                        value={paciente.cpf}>
                                                        {paciente.nome}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>

                        {/* Botões */}
                        <div className="flex justify-end space-x-2 pt-4">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                disabled={isSubmitting}
                                className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 focus:ring-2 focus:ring-gray-400">
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-40 h-11 flex-shrink-0 bg-[#faae2b] text-gray-900 font-semibold rounded-lg hover:bg-amber-500 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-800">
                                {isSubmitting
                                    ? 'Cadastrando...'
                                    : 'Cadastrar Tarefa'}
                            </button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
