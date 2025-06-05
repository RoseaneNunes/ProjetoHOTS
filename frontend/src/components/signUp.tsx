import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { z } from 'zod';
import { api } from '@/lib/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from 'lucide-react';

interface Microarea {
    id: number;
    nome: string;
    descricao: string;
}

const singUpSchema = z
    .object({
        nome: z.string().nonempty('Esse campo é obrigatório'),
        email: z.string().email('Email inválido'),
        senha: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
        cargo: z
            .string({ required_error: 'Esse campo é obrigatório' })
            .nonempty('Esse campo é obrigatório'),
        confirm_password: z.string().nonempty('Esse campo é obrigatório'),
        microarea_id: z.coerce
            .number({ invalid_type_error: 'Microárea é obrigatória' })
            .positive('Microárea é obrigatória')
            .optional(),
    })
    .refine((data) => data.senha === data.confirm_password, {
        message: 'As senhas não coincidem',
        path: ['confirm_password'],
    });

type SingUpSchema = z.infer<typeof singUpSchema>;
type SignUpProps = {
    setMudarPage: (value: boolean) => void;
};

export default function SingUp({ setMudarPage }: SignUpProps) {
    const [microareas, setMicroareas] = useState<Microarea[]>([]);

    useEffect(() => {
        const fetchMicroareas = async () => {
            try {
                const response = await api.get(
                    'http://localhost:3333/api/microareas'
                );
                setMicroareas(response.data);
            } catch (error) {
                console.error('Erro ao carregar microáreas:', error);
                toast.error('Falha ao carregar microáreas.');
            }
        };

        fetchMicroareas();
    }, []);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SingUpSchema>({ resolver: zodResolver(singUpSchema) });

    const router = useRouter();

    async function handleRegiterUser(data: SingUpSchema) {
        try {
            const { confirm_password, ...requestData } = data;

            const payload = {
                ...requestData,
                microarea_id: requestData.microarea_id
                    ? Number(requestData.microarea_id)
                    : undefined,
            };
            if (payload.cargo === 'AGT' && !payload.microarea_id) {
                toast.error('Agentes de saúde devem selecionar uma microárea.');
                return;
            }

            await api.post('http://localhost:3333/api/agentes', payload);
            toast.success('Usuário registrado com sucesso!');
            router.push('/homePage');
        } catch (error) {
            console.error('Erro completo ao registrar:', error);
            toast.error('Ocorreu um erro ao criar o usuário.');
        }
    }
    const commonInputClassName =
        'w-full max-w-md h-[7vh] border-2 border-[#00332c] text-[#475d5b] hover:ring-1';
    const errorRingClassName = 'ring-2 ring-red-500';
    const errorMessageClassName =
        'text-red-500 text-xs self-start w-full max-w-md -mt-3 mb-1';

    return (
        <div>
            <section className="flex flex-col w-screen h-screen absolute z-40 items-center bg-[#f2f7f5] justify-center gap-3 ">
                <h1 className="text-[#00473e] text-7xl font-bold">HOTS</h1>
                <h2 className="text-[#00473e] bg-[#faae2b] p-1.5 rounded-3xl">
                    Heath organization Task System
                </h2>

                <form
                    onSubmit={handleSubmit(handleRegiterUser)}
                    className="w-full flex justify-center">
                    <div className="xl:w-[568px] w-[90vw] h-auto md:w-[60vw] relative border-2 border-[#00332c] rounded-4xl flex flex-col items-center justify-start shadow-xl shadow-[#00332c] pt-10 pb-8">
                        <div className="w-full absolute top-0 left-0 flex justify-center">
                            <h3 className="text-white w-[200px] h-16 bg-[#00332c] text-3xl text-center rounded-b-4xl shadow-xl flex items-center justify-center">
                                Cadastrar
                            </h3>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMudarPage(true)} 
                            className="absolute top-4 left-4 z-10">
                            <ArrowLeftIcon size={40} color="#00332c" />
                        </button>

                        <div className="flex flex-col items-center gap-4 w-full px-6 mt-8">
                            <Input
                                disabled={isSubmitting}
                                {...register('nome')}
                                placeholder="Nome do usuário"
                                className={`${commonInputClassName} ${
                                    errors.nome ? errorRingClassName : ''
                                }`}
                            />
                            {errors.nome?.message && (
                                <p className={errorMessageClassName}>
                                    {errors.nome.message}
                                </p>
                            )}

                            <Input
                                placeholder="Email"
                                disabled={isSubmitting}
                                {...register('email')}
                                className={`${commonInputClassName} ${
                                    errors.email ? errorRingClassName : ''
                                }`}
                            />
                            {errors.email?.message && (
                                <p className={errorMessageClassName}>
                                    {errors.email.message}
                                </p>
                            )}

                            <Controller
                                name="cargo"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        disabled={isSubmitting}>
                                        <SelectTrigger
                                            className={`${commonInputClassName} ${
                                                errors.cargo
                                                    ? errorRingClassName
                                                    : ''
                                            }`}>
                                            <SelectValue placeholder="Selecione o cargo" />
                                        </SelectTrigger>
                                        <SelectContent className="text-[#475d5b] bg-white border-[#00332c]">
                                            <SelectGroup>
                                                <SelectItem value="AGT">
                                                    Agente de Saúde
                                                </SelectItem>
                                                <SelectItem value="ADM">
                                                    Administrador
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.cargo?.message && (
                                <p className={errorMessageClassName}>
                                    {errors.cargo.message}
                                </p>
                            )}

                            <Controller
                                name="microarea_id"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={(value:string) =>
                                            field.onChange(
                                                value
                                                    ? Number(value)
                                                    : undefined
                                            )
                                        }
                                        value={
                                            field.value
                                                ? String(field.value)
                                                : ''
                                        }
                                        disabled={isSubmitting}>
                                        <SelectTrigger
                                            className={`${commonInputClassName} ${
                                                errors.microarea_id
                                                    ? errorRingClassName
                                                    : ''
                                            }`}>
                                            <SelectValue placeholder="Selecione a microárea (opcional para ADM)" />
                                        </SelectTrigger>
                                        <SelectContent className="text-[#475d5b] bg-white border-[#00332c]">
                                            <SelectGroup>
                                                {microareas.map((microarea) => (
                                                    <SelectItem
                                                        key={microarea.id}
                                                        value={String(
                                                            microarea.id
                                                        )}>
                                                        {microarea.nome}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.microarea_id?.message && (
                                <p className={errorMessageClassName}>
                                    {errors.microarea_id.message}
                                </p>
                            )}

                            <Input
                                disabled={isSubmitting}
                                placeholder="Senha (mín. 8 caracteres)"
                                type="password"
                                {...register('senha')}
                                className={`${commonInputClassName} ${
                                    errors.senha ? errorRingClassName : ''
                                }`}
                            />
                            {errors.senha?.message && (
                                <p className={errorMessageClassName}>
                                    {errors.senha.message}
                                </p>
                            )}

                            <Input
                                disabled={isSubmitting}
                                placeholder="Confirme sua Senha"
                                type="password"
                                {...register('confirm_password')}
                                className={`${commonInputClassName} ${
                                    errors.confirm_password
                                        ? errorRingClassName
                                        : ''
                                }`}
                            />
                            {errors.confirm_password?.message && (
                                <p className={errorMessageClassName}>
                                    {errors.confirm_password.message}
                                </p>
                            )}
                        </div>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="bg-[#faae2b] xl:w-[300px] h-[40px] w-[80%] max-w-xs mt-8 mb-4 rounded-4xl shadow-xl hover:ring hover:ring-amber-500 hover:ring-offset-4 text-[#f2f7f5]">
                            {isSubmitting ? 'Criando...' : 'Criar conta'}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
