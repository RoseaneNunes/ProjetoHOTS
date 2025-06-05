import { PlusIcon } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formatCPF = (value: string): string => {
    if (!value) return value;
    const cpf = value.replace(/\D/g, '');
    const limitedCpf = cpf.slice(0, 11);
    if (limitedCpf.length <= 3) return limitedCpf;
    if (limitedCpf.length <= 6) return `${limitedCpf.slice(0, 3)}.${limitedCpf.slice(3)}`;
    if (limitedCpf.length <= 9)
        return `${limitedCpf.slice(0, 3)}.${limitedCpf.slice(3, 6)}.${limitedCpf.slice(6)}`;
    return `${limitedCpf.slice(0, 3)}.${limitedCpf.slice(3, 6)}.${limitedCpf.slice(6, 9)}-${limitedCpf.slice(9, 11)}`;
};

interface Microarea {
    id: number;
    nome: string;
    descricao: string;
}
interface Agente {
    id: number;
}

interface CadastroDePacienteProps {
    onPacienteCadastrado: () => void;
}

const pacienteSchema = z.object({
    nome: z.string().nonempty('O nome é um campo obrigatorio'),
    cpf: z.string().nonempty('O CPF é um campo obrigatorio'),
    endereco: z.string().nonempty('O endereço é obrigatorio'),
    comorbidades: z.string(),
    situação: z.string(),
    microarea_id: z.number().min(1, 'A microárea é obrigatória'),
});

type pacienteSchema = z.infer<typeof pacienteSchema>;

export function CadastroDePaciente({ onPacienteCadastrado }: CadastroDePacienteProps) {
    const [microareas, setMicroareas] = useState<Microarea[]>([]);
    const [agentIds, setAgentIds] = useState<number[]>([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchAgentes = async () => {
            try {
                const response = await api.get<Agente[]>('http://localhost:3333/api/agentes');
                const ids = response.data.map((agent) => agent.id);
                setAgentIds(ids);
            } catch (error) {
                console.error('Erro ao carregar agentes:', error);
            }
        };
        if (open) {
            fetchAgentes();
        }
    }, [open]);

    useEffect(() => {
        const fetchMicroareas = async () => {
            try {
                const response = await api.get('http://localhost:3333/api/microareas');
                setMicroareas(response.data);
            } catch (error) {
                console.error('Erro ao carregar microáreas:', error);
            }
        };
        if (open) {
            fetchMicroareas();
        }
    }, [open]);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<pacienteSchema>({
        resolver: zodResolver(pacienteSchema),
        defaultValues: {
            nome: '',
            cpf: '',
            endereco: '',
            comorbidades: '',
            situação: '',
            microarea_id: undefined,
        },
    });

    async function handleRegiterUser(data: pacienteSchema) {
        try {
            const payload = {
                ...data,
                microarea_id: Number(data.microarea_id),
            };
            await api.post('/pacientes', payload);
            toast.success('Paciente registrado com sucesso!');
            onPacienteCadastrado();
            setOpen(false);
            reset();
        } catch (error: any) {
            console.error('Erro completo ao registrar paciente:', error);
            if (error.response && error.response.data && error.response.data.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Ocorreu um erro ao criar o paciente. Tente novamente.');
            }
        }
    }

    const commonInputClassName =
        'w-full h-10 px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#faae2b] focus:border-[#faae2b]';
    const errorRingClassName = 'ring-2 ring-red-500 border-red-500';
    const labelClassName = 'block text-sm font-medium text-gray-300 mb-1';

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="bg-[#faae2b] rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800 hover:ring-[#faae2b]">
                    <PlusIcon className="text-gray-900" size={24} />
                </button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 text-white sm:max-w-lg p-6 max-h-[85vh] flex flex-col">
                <DialogHeader className="mb-4 flex-shrink-0">
                    <DialogTitle className="text-xl font-semibold text-center">
                        Cadastro de paciente
                    </DialogTitle>
                </DialogHeader>
                <div className="flex-grow overflow-y-auto pr-2">
                    <form onSubmit={handleSubmit(handleRegiterUser)} className="space-y-4">
                        <div>
                            <label htmlFor="nome" className={labelClassName}>
                                Nome Completo
                            </label>
                            <Input
                                id="nome"
                                className={`${commonInputClassName} ${errors.nome ? errorRingClassName : ''}`}
                                placeholder="Nome Completo do Paciente"
                                disabled={isSubmitting}
                                {...register('nome')}
                            />
                            {errors.nome && (
                                <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="cpf" className={labelClassName}>
                                CPF
                            </label>
                            <Controller
                                name="cpf"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        id="cpf"
                                        className={`${commonInputClassName} ${errors.cpf ? errorRingClassName : ''}`}
                                        placeholder="000.000.000-00"
                                        disabled={isSubmitting}
                                        value={field.value}
                                        onChange={(e) => {
                                            const formattedCPF = formatCPF(e.target.value);
                                            field.onChange(formattedCPF);
                                        }}
                                        maxLength={14}
                                    />
                                )}
                            />
                            {errors.cpf && (
                                <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>
                            )}
                        </div>

                        <div className="pt-2">
                            <h3 className="text-md font-semibold text-gray-300 mb-2">Endereço</h3>
                            <div>
                                <label htmlFor="endereco" className={labelClassName}>
                                    Logradouro Completo
                                </label>
                                <Input
                                    id="endereco"
                                    className={`${commonInputClassName} ${
                                        errors.endereco ? errorRingClassName : ''
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
                            <div className="mt-4">
                                <label htmlFor="microarea_id" className={labelClassName}>
                                    Microárea
                                </label>
                                <Controller
                                    name="microarea_id"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value ? String(field.value) : undefined}
                                            onValueChange={(value:string) =>
                                                field.onChange(
                                                    value ? Number(value) : undefined
                                                )
                                            }
                                            disabled={isSubmitting}>
                                            <SelectTrigger
                                                id="microarea_id"
                                                className={`${commonInputClassName} ${
                                                    errors.microarea_id
                                                        ? errorRingClassName
                                                        : ''
                                                }`}>
                                                <SelectValue placeholder="Selecione a microárea" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-700 text-white border-gray-600">
                                                <SelectGroup>
                                                    {microareas.map((microarea) => (
                                                        <SelectItem
                                                            key={microarea.id}
                                                            value={String(microarea.id)}>
                                                            {microarea.nome}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.microarea_id && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.microarea_id.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="pt-2">
                            <h3 className="text-md font-semibold text-gray-300 mb-2">
                                Informações de Saúde
                            </h3>
                            <div>
                                <label htmlFor="comorbidades" className={labelClassName}>
                                    Comorbidades
                                </label>
                                <Input
                                    id="comorbidades"
                                    className={`${commonInputClassName} ${
                                        errors.comorbidades ? errorRingClassName : ''
                                    }`}
                                    placeholder="Ex: Hipertensão, Diabetes"
                                    disabled={isSubmitting}
                                    {...register('comorbidades')}
                                />
                                {errors.comorbidades && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.comorbidades.message}
                                    </p>
                                )}
                            </div>
                            <div className="mt-4">
                                <label htmlFor="situacao" className={labelClassName}>
                                    Situação do Paciente
                                </label>
                                <Textarea
                                    id="situacao"
                                    className={`${commonInputClassName} min-h-[80px] ${
                                        errors.situação ? errorRingClassName : ''
                                    }`}
                                    placeholder="Descreva a situação atual do paciente"
                                    disabled={isSubmitting}
                                    {...register('situação')}
                                />
                                {errors.situação && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.situação.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full mt-6 h-11 flex-shrink-0 bg-[#faae2b] text-gray-900 font-semibold rounded-lg hover:bg-amber-500 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-800 ">
                            {isSubmitting ? 'Carregando...' : 'Cadastrar paciente'}
                        </button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
