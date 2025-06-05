import { useEffect, useState } from 'react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/lib/api';
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

interface Microarea {
    id: number;
    nome: string;
    descricao: string;
}

interface Agente {
    id: number;
    nome: string;
}

interface Paciente {
    cpf: string;
    nome: string;
    endereco: string | null;
    comorbidades: string | null;
    situacao: string | null;
    agente_id: number | null;
    microarea_id: number | null;
}

interface EditarPacienteProps {
    cpf: string | null;
    aberto: boolean;
    onFechar: () => void;
    onPacienteEditado: () => void;
}

const formatCPF = (value: string): string => {
    if (!value) return value;
    const cpf = value.replace(/\D/g, '').slice(0, 11);
    if (cpf.length <= 3) return cpf;
    if (cpf.length <= 6) return `${cpf.slice(0, 3)}.${cpf.slice(3)}`;
    if (cpf.length <= 9) return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6)}`;
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
};

const pacienteSchema = z.object({
    nome: z.string().nonempty(),
    endereco: z.string().nonempty(),
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
        formState: { isSubmitting },
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

    useEffect(() => {
        const buscarPaciente = async () => {
            if (!cpf || !aberto) return;
            setCarregando(true);
            try {
                const response = await api.get<Paciente>(`/pacientes/${cpf}`);
                const paciente = response.data;
                setValue('nome', paciente.nome);
                setValue('endereco', paciente.endereco || '');
                setValue('comorbidades', paciente.comorbidades || '');
                setValue('situacao', paciente.situacao || '');
                setValue('agente_id', paciente.agente_id);
                setValue('microarea_id', paciente.microarea_id);
                await Promise.all([buscarMicroareas(), buscarAgentes()]);
            } finally {
                setCarregando(false);
            }
        };
        buscarPaciente();
    }, [cpf, aberto, setValue]);

    const buscarMicroareas = async () => {
        const response = await api.get<Microarea[]>('/microareas');
        setMicroareas(response.data);
    };

    const buscarAgentes = async () => {
        const response = await api.get<Agente[]>('/agentes');
        setAgentes(response.data);
    };

    const handleEditarPaciente = async (data: PacienteSchema) => {
        if (!cpf) return;
        await api.put(`/pacientes/${cpf}`, data);
        onPacienteEditado();
        onFechar();
    };

    const commonInputClassName =
        'w-full h-10 px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#faae2b] focus:border-[#faae2b]';
    const labelClassName = 'block text-sm font-medium text-gray-300 mb-1';

    return (
        <Dialog open={aberto} onOpenChange={onFechar}>
            <DialogContent className="bg-gray-800 text-white sm:max-w-lg p-6 max-h-[85vh] flex flex-col">
                <DialogHeader className="mb-4 flex-shrink-0">
                    <DialogTitle className="text-xl font-semibold text-center">
                        Editar Paciente
                    </DialogTitle>
                </DialogHeader>

                {!carregando && (
                    <div className="flex-grow overflow-y-auto pr-2">
                        <form
                            onSubmit={handleSubmit(handleEditarPaciente)}
                            className="space-y-4 mt-4">
                            <div>
                                <label htmlFor="cpf" className={labelClassName}>
                                    CPF
                                </label>
                                <Input
                                    id="cpf"
                                    value={cpf ? formatCPF(cpf) : ''}
                                    className={`${commonInputClassName} bg-gray-600`}
                                    disabled
                                    readOnly
                                />
                            </div>

                            <div>
                                <label htmlFor="nome" className={labelClassName}>
                                    Nome Completo
                                </label>
                                <Input
                                    id="nome"
                                    className={commonInputClassName}
                                    placeholder="Nome Completo do Paciente"
                                    disabled={isSubmitting}
                                    {...register('nome')}
                                />
                            </div>

                            <div>
                                <label htmlFor="endereco" className={labelClassName}>
                                    Logradouro Completo
                                </label>
                                <Input
                                    id="endereco"
                                    className={commonInputClassName}
                                    placeholder="Rua, Número, Bairro, Complemento"
                                    disabled={isSubmitting}
                                    {...register('endereco')}
                                />
                            </div>

                            <div>
                                <label htmlFor="agente_id" className={labelClassName}>
                                    Agente Responsável
                                </label>
                                <Controller
                                    name="agente_id"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value ? String(field.value) : 'null'}
                                            onValueChange={(value:string) =>
                                                field.onChange(value === 'null' ? null : Number(value))
                                            }
                                            disabled={isSubmitting}>
                                            <SelectTrigger id="agente_id" className={commonInputClassName}>
                                                <SelectValue placeholder="Selecione o agente responsável" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-700 text-white border-gray-600">
                                                <SelectGroup>
                                                    <SelectItem value="null">Nenhum</SelectItem>
                                                    {agentes.map((agente) => (
                                                        <SelectItem key={agente.id} value={String(agente.id)}>
                                                            {agente.nome}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            <div>
                                <label htmlFor="microarea_id" className={labelClassName}>
                                    Microárea
                                </label>
                                <Controller
                                    name="microarea_id"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value ? String(field.value) : 'null'}
                                            onValueChange={(value:string) =>
                                                field.onChange(value === 'null' ? null : Number(value))
                                            }
                                            disabled={isSubmitting}>
                                            <SelectTrigger id="microarea_id" className={commonInputClassName}>
                                                <SelectValue placeholder="Selecione a microárea" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-700 text-white border-gray-600">
                                                <SelectGroup>
                                                    <SelectItem value="null">Nenhuma</SelectItem>
                                                    {microareas.map((microarea) => (
                                                        <SelectItem key={microarea.id} value={String(microarea.id)}>
                                                            {microarea.nome}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            <div>
                                <label htmlFor="comorbidades" className={labelClassName}>
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

                            <div>
                                <label htmlFor="situacao" className={labelClassName}>
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
