import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { z } from 'zod';
import { api } from '@/lib/api';
import { useEffect, useState } from 'react';

interface Microarea {
    id: number;
    nome: string;
    descricao: string;
}

const singUpSchema = z
    .object({
        nome: z.string().nonempty('esse campo é obrigatorio'),
        email: z.string().email('email invalido'),
        senha: z
            .string()
            .min(8, 'esse campo tem que ter pelo menos 8 caracteres'),
        cargo: z
            .string({ required_error: 'esse campo é obrigatorio' })
            .nonempty('esse campo é obrigatorio'),
        confirm_password: z.string().nonempty('esse campo é obrigatorio'),
        microarea_id: z.number().optional(),
    })
    .refine((data) => data.senha === data.confirm_password, {
        message: 'As senhas não coincidem',
        path: ['confirm_password'],
    });

type singUpSchema = z.infer<typeof singUpSchema>;

export default function Home() {
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
            }
        };

        fetchMicroareas();
    }, []);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<singUpSchema>({ resolver: zodResolver(singUpSchema) });

    async function handleRegiterUser(data: singUpSchema) {
        try {
            const { confirm_password, ...requestData } = data;

            console.log('Enviando dados:', requestData);

            const response = await api.post(
                'http://localhost:3333/api/agentes',
                requestData
            );

            toast.success('usuario registrado com sucesso!');
        } catch (error) {
            console.error('erro completo:', error);
            toast.error('ocorreu um erro ao criar um usuario ' + error);
        }
    }

    return (
        <form onSubmit={handleSubmit(handleRegiterUser)}>
            <section className="bg-[#f2f7f5] flex flex-col w-screen h-screen items-center justify-center gap-3 ">
                <h1 className="text-[#00473e] text-7xl font-bold">HOTS</h1>
                <h2 className="text-[#00473e] bg-[#faae2b] p-1.5 rounded-3xl">
                    {' '}
                    Heath organization Task System
                </h2>

                <div className="xl:w-[568px] xl:h-[600px] h-[]  border-2 border-[#00332c]  rounded-4xl flex flex-col items-center   justify-center  shadow-xl shadow-[#00332c] ">
                    <h3 className="text-[] w-[200px]  bg-[#00332c] pt-6 absolute top-1/4 text-3xl text-center rounded-b-2xl shadow-xl ">
                        Cadastro
                    </h3>
                    <div className="flex flex-col gap-1.5 py-9 ">
                        <Input
                            placeholder="Nome do usuario"
                            {...register('nome')}
                            className=" w-[355px] border-2 border-[#00332c]  text-[#475d5b] hover:ring-1"
                        />
                        {errors.nome && (
                            <div className="text-sm text-red-500">
                                {errors.nome.message}
                            </div>
                        )}

                        <Input
                            placeholder="Email"
                            {...register('email')}
                            className=" w-[355px] border-2 border-[#00332c]  text-[#475d5b] hover:ring-1"
                        />
                        {errors.email && (
                            <div className="text-sm text-red-500">
                                {errors.email.message}
                            </div>
                        )}

                        <Controller
                            name="cargo"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}>
                                    <SelectTrigger className="w-[355px] border-[#00332c] border-2 text-[#475d5b] hover:ring-1">
                                        <SelectValue placeholder="Selecione o cargo" />
                                    </SelectTrigger>
                                    <SelectContent className="text-[#475d5b] shadow-2xs">
                                        <SelectGroup>
                                            <SelectItem
                                                value="AGT"
                                                className="text-[#475d5b] shadow-2xs">
                                                Agente de Saúde
                                            </SelectItem>
                                            <SelectItem
                                                value="ADM"
                                                className="text-[#475d5b] shadow-2xs">
                                                Administrador
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.cargo && (
                            <div className="text-sm text-red-500">
                                {errors.cargo.message}
                            </div>
                        )}

                        <Controller
                            name="microarea_id"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    onValueChange={(value) =>
                                        field.onChange(Number(value))
                                    }
                                    defaultValue={
                                        field.value
                                            ? String(field.value)
                                            : undefined
                                    }>
                                    <SelectTrigger className="w-[355px] border-[#00332c] border-2 text-[#475d5b] hover:ring-1">
                                        <SelectValue placeholder="Selecione a microárea" />
                                    </SelectTrigger>
                                    <SelectContent className="text-[#475d5b] shadow-2xs">
                                        <SelectGroup>
                                            {microareas.map((microarea) => (
                                                <SelectItem
                                                    key={microarea.id}
                                                    value={String(microarea.id)}
                                                    className="text-[#475d5b] shadow-2xs">
                                                    {microarea.nome}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />

                        <Input
                            placeholder="Senha"
                            {...register('senha')}
                            className=" w-[355px] border-2 border-[#00332c] text-[#475d5b] hover:ring-1"
                        />
                        {errors.senha && (
                            <div className="text-sm text-red-500">
                                {errors.senha.message}
                            </div>
                        )}

                        <Input
                            placeholder="Confirme sua Senha"
                            {...register('confirm_password')}
                            className=" w-[355px] border-2 border-[#00332c] text-[#475d5b] hover:ring-1"
                        />
                        {errors.confirm_password && (
                            <div className="text-sm text-red-500">
                                {errors.confirm_password.message}
                            </div>
                        )}
                    </div>
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="bg-[#faae2b] w-[300px] h-[40px] absolute bottom-1/6 rounded-4xl  shadow-xl hover:ring hover:ring-amber-500 hover:ring-offset-4 text-[#f2f7f5]">
                        {' '}
                        {isSubmitting ? 'Carregando...' : 'Criar conta'}
                    </button>
                </div>
            </section>
        </form>
    );
}
