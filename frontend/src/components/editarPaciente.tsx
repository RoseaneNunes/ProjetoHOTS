import { useEffect, useState } from 'react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
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

// Interfaces para os dados de microárea e agente
interface Microarea {
    id: number;
    nome: string;
    descricao: string;
}

interface Agente {
    id: number;
    nome: string;
}

// Interface para o paciente a ser editado
interface Paciente {
    cpf: string;
    nome: string;
    endereco: string | null;
    comorbidades: string | null;
    situacao: string | null;
    agente_id: number | null;
    microarea_id: number | null;
}

// Props do componente
interface EditarPacienteProps {
    cpf: string | null;
    aberto: boolean;
    onFechar: () => void;
    onPacienteEditado: () => void;
}

// Função para formatar CPF para exibição
const formatCPF = (value: string): string => {
    if (!value) return value;

    const cpf = value.replace(/\D/g, '');
    const limitedCpf = cpf.slice(0, 11);

    if (limitedCpf.length <= 3) return limitedCpf;
    if (limitedCpf.length <= 6)
        return `${limitedCpf.slice(0, 3)}.${limitedCpf.slice(3)}`;
    if (limitedCpf.length <= 9)
        return `${limitedCpf.slice(0, 3)}.${limitedCpf.slice(
            3,
            6
        )}.${limitedCpf.slice(6)}`;
    return `${limitedCpf.slice(0, 3)}.${limitedCpf.slice(
        3,
        6
    )}.${limitedCpf.slice(6, 9)}-${limitedCpf.slice(9, 11)}`;
};

// Schema de validação com Zod
const pacienteSchema = z.object({
    nome: z.string().nonempty('O nome é um campo obrigatório'),
    endereco: z.string().nonempty('O endereço é obrigatório'),
    comorbidades: z.string().optional(),
    situacao: z.string().optional(),
    agente_id: z.number().nullable(),
    microarea_id: z.number().nullable(),
});

type PacienteSchema = z.infer<typeof pacienteSchema>;

export function EditarPaciente({
    cpf,
    aberto,
    onFechar,
    onPacienteEditado,
}: EditarPacienteProps) {
    const [carregando, setCarregando] = useState(true);
    const [microareas, setMicroareas] = useState<Microarea[]>([]);
    const [agentes, setAgentes] = useState<Agente[]>([]);

    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<PacienteSchema>({
        resolver: zodResolver(pacienteSchema),
        defaultValues: {
            nome: '',
            endereco: '',
            comorbidades: '',
            situacao: '',
            agente_id: null,
            microarea_id: null,
        },
    });

    // Buscar dados do paciente quando o modal abrir
    useEffect(() => {
        const buscarPaciente = async () => {
            if (!cpf || !aberto) return;

            try {
                setCarregando(true);
                const response = await api.get<Paciente>(`/pacientes/${cpf}`);
                const paciente = response.data;

                // Preencher o formulário com os dados do paciente
                setValue('nome', paciente.nome);
                setValue('endereco', paciente.endereco || '');
                setValue('comorbidades', paciente.comorbidades || '');
                setValue('situacao', paciente.situacao || '');
                setValue('agente_id', paciente.agente_id);
                setValue('microarea_id', paciente.microarea_id);

                // Buscar microáreas e agentes para os selects
                await Promise.all([buscarMicroareas(), buscarAgentes()]);
            } catch (error) {
                console.error('Erro ao buscar paciente:', error);
                toast.error('Não foi possível carregar os dados do paciente');
                onFechar();
            } finally {
                setCarregando(false);
            }
        };

        buscarPaciente();
    }, [cpf, aberto, setValue]);

    // Buscar microáreas para o select
    const buscarMicroareas = async () => {
        try {
            const response = await api.get<Microarea[]>('/microareas');
            setMicroareas(response.data);
        } catch (error) {
            console.error('Erro ao buscar microáreas:', error);
            toast.error('Erro ao carregar lista de microáreas');
        }
    };

    // Buscar agentes para o select
    const buscarAgentes = async () => {
        try {
            const response = await api.get<Agente[]>('/agentes');
            setAgentes(response.data);
        } catch (error) {
            console.error('Erro ao buscar agentes:', error);
            toast.error('Erro ao carregar lista de agentes');
        }
    };

    // Função para editar o paciente
    const handleEditarPaciente = async (data: PacienteSchema) => {
        if (!cpf) return;

        try {
            await api.put(`/pacientes/${cpf}`, data);
            toast.success('Paciente atualizado com sucesso!');
            onPacienteEditado();
            onFechar();
        } catch (error: any) {
            console.error('Erro ao atualizar paciente:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao atualizar paciente. Tente novamente.');
            }
        }
    };

    // Estilos comuns
    const commonInputClassName =
        'w-full h-10 px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#faae2b] focus:border-[#faae2b]';
    const errorRingClassName = 'ring-2 ring-red-500 border-red-500';
    const labelClassName = 'block text-sm font-medium text-gray-300 mb-1';

    return (
        <Dialog open={aberto} onOpenChange={onFechar}>
            <DialogContent className="bg-gray-800 text-white sm:max-w-lg p-6 max-h-[85vh] flex flex-col">
                <DialogHeader className="mb-4 flex-shrink-0">
                    <DialogTitle className="text-xl font-semibold text-center">
                        Editar Paciente
                    </DialogTitle>
                </DialogHeader>

                {carregando ? (
                    <div className="flex justify-center items-center py-8">
                        <p>Carregando dados do paciente...</p>
                    </div>
                ) : (
                    <div className="flex-grow overflow-y-auto pr-2">
                        <form
                            onSubmit={handleSubmit(handleEditarPaciente)}
                            className="space-y-4 mt-4">
                            {/* CPF (somente leitura, pois é a chave primária) */}
                            <div>
                                <label htmlFor="cpf" className={labelClassName}>
                                    CPF
                                </label>
                                <Input
                                    id="cpf"
                                    value={cpf ? formatCPF(cpf) : ''}
                                    className={`${commonInputClassName} bg-gray-600`}
                                    disabled={true}
                                    readOnly
                                />
                                <p className="text-xs text-gray-400 mt-1">
                                    O CPF não pode ser alterado
                                </p>
                            </div>

                            {/* Nome */}
                            <div>
                                <label
                                    htmlFor="nome"
                                    className={labelClassName}>
                                    Nome Completo
                                </label>
                                <Input
                                    id="nome"
                                    className={`${commonInputClassName} ${
                                        errors.nome ? errorRingClassName : ''
                                    }`}
                                    placeholder="Nome Completo do Paciente"
                                    disabled={isSubmitting}
                                    {...register('nome')}
                                />
                                {errors.nome && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.nome.message}
                                    </p>
                                )}
                            </div>

                            {/* Endereço */}
                            <div>
                                <label
                                    htmlFor="endereco"
                                    className={labelClassName}>
                                    Logradouro Completo
                                </label>
                                <Input
                                    id="endereco"
                                    className={`${commonInputClassName} ${
                                        errors.endereco
                                            ? errorRingClassName
                                            : ''
                                    }`}
                                    placeholder="Rua, Número, Bairro, Complemento"
                                    disabled={isSubmitting}
                                    {...register('endereco')}
                                />
                                {errors.endereco && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.endereco.message}
                                    </p>
                                )}
                            </div>

                            {/* Agente Responsável */}
                            <div>
                                <label
                                    htmlFor="agente_id"
                                    className={labelClassName}>
                                    Agente Responsável
                                </label>
                                <Controller
                                    name="agente_id"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={
                                                field.value
                                                    ? String(field.value)
                                                    : 'null'
                                            }
                                            onValueChange={(value) =>
                                                field.onChange(
                                                    value === 'null'
                                                        ? null
                                                        : Number(value)
                                                )
                                            }
                                            disabled={isSubmitting}>
                                            <SelectTrigger
                                                id="agente_id"
                                                className={
                                                    commonInputClassName
                                                }>
                                                <SelectValue placeholder="Selecione o agente responsável" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-700 text-white border-gray-600">
                                                <SelectGroup>
                                                    <SelectItem value="null">
                                                        Nenhum
                                                    </SelectItem>
                                                    {agentes.map((agente) => (
                                                        <SelectItem
                                                            key={agente.id}
                                                            value={String(
                                                                agente.id
                                                            )}>
                                                            {agente.nome}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            {/* Microárea */}
                            <div>
                                <label
                                    htmlFor="microarea_id"
                                    className={labelClassName}>
                                    Microárea
                                </label>
                                <Controller
                                    name="microarea_id"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={
                                                field.value
                                                    ? String(field.value)
                                                    : 'null'
                                            }
                                            onValueChange={(value) =>
                                                field.onChange(
                                                    value === 'null'
                                                        ? null
                                                        : Number(value)
                                                )
                                            }
                                            disabled={isSubmitting}>
                                            <SelectTrigger
                                                id="microarea_id"
                                                className={
                                                    commonInputClassName
                                                }>
                                                <SelectValue placeholder="Selecione a microárea" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-700 text-white border-gray-600">
                                                <SelectGroup>
                                                    <SelectItem value="null">
                                                        Nenhuma
                                                    </SelectItem>
                                                    {microareas.map(
                                                        (microarea) => (
                                                            <SelectItem
                                                                key={
                                                                    microarea.id
                                                                }
                                                                value={String(
                                                                    microarea.id
                                                                )}>
                                                                {microarea.nome}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            {/* Comorbidades */}
                            <div>
                                <label
                                    htmlFor="comorbidades"
                                    className={labelClassName}>
                                    Comorbidades
                                </label>
                                <Input
                                    id="comorbidades"
                                    className={commonInputClassName}
                                    placeholder="Ex: Hipertensão, Diabetes"
                                    disabled={isSubmitting}
                                    {...register('comorbidades')}
                                />
                            </div>

                            {/* Situação */}
                            <div>
                                <label
                                    htmlFor="situacao"
                                    className={labelClassName}>
                                    Situação do Paciente
                                </label>
                                <Textarea
                                    id="situacao"
                                    className={`${commonInputClassName} min-h-[80px]`}
                                    placeholder="Descreva a situação atual do paciente"
                                    disabled={isSubmitting}
                                    {...register('situacao')}
                                />
                            </div>

                            {/* Botões */}
                            <div className="flex justify-end space-x-2 pt-4">
                                <button
                                    type="button"
                                    onClick={onFechar}
                                    disabled={isSubmitting}
                                    className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 focus:ring-2 focus:ring-gray-400">
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-40 h-11 flex-shrink-0 bg-[#faae2b] text-gray-900 font-semibold rounded-lg hover:bg-amber-500 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-800">
                                    {isSubmitting
                                        ? 'Salvando...'
                                        : 'Salvar Alterações'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
