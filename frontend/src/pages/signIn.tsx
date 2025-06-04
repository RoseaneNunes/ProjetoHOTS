import { Input } from '@/components/ui/input';
import { Form, useForm } from 'react-hook-form';
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
import { useState } from 'react';
import { z } from 'zod';
import { Switch } from '@/components/ui/switch';

const singUpSchema = z
    .object({
        name: z.string().min(1, 'esse campo é obrigatorio'),
        email: z.string().email('email invalido'),
        password: z
            .string()
            .min(8, 'esse campo tem que ter pelo menos 8 caracteres'),
        position: z.string().min(1, 'esse campo é obrigatorio'),
        confirm_password: z.string(),
    })
    .refine((data) => data.password === data.confirm_password, {
        message: 'as senhas não são iquais',
        path: ['confirm_password'],
    });

type singUpSchema = z.infer<typeof singUpSchema>;

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<singUpSchema>({ resolver: zodResolver(singUpSchema) });

    async function handleRegiterUser(data: singUpSchema) {
        try {
            toast.success('usuario registrado com sucesso!');
        } catch (error) {
            toast.error('');
        }
    }

    return (
        <form onSubmit={handleSubmit(handleRegiterUser)}>
            <section className="bg-[#f2f7f5] flex flex-col w-screen h-screen items-center justify-center gap-3">
                <h1 className="text-[#00473e] text-7xl">HOTS</h1>
                <h2 className="text-[#00473e] bg-[#faae2b] p-1.5 rounded-3xl">
                    {' '}
                    Heath organization Task System
                </h2>

                <div className="w-[568px] h-[600px] border-[#00332c]  border-4  rounded-4xl flex flex-col items-center justify-center  ">
                    <h3 className="text-[#475d5b]  ">Cadastro</h3>
                    <div className="flex flex-col gap-1.5 py-9">
                        <p className="text-[#475d5b] self-start "> Nome</p>
                        <Input
                            {...register('name')}
                            className=" w-[355px] border-2 border-[#00332c]  text-[#475d5b]"
                        />
                        {errors.name && (
                            <div className="text-sm text-red-500">
                                {errors.name.message}
                            </div>
                        )}
                        <p className="text-[#475d5b] self-start"> Email</p>
                        <Input
                            {...register('email')}
                            className=" w-[355px] border-2 border-[#00332c]  text-[#475d5b]"
                        />
                        {errors.email && (
                            <div className="text-sm text-red-500">
                                {errors.email.message}
                            </div>
                        )}
                        <p className="text-[#475d5b] self-start"> cargo</p>
                        <Select>
                            <SelectTrigger
                                {...register('position')}
                                className="w-[355px] border-[#00332c] border-2 text-[#475d5b] ">
                                <SelectValue placeholder="" />
                                <SelectContent className="text-[#475d5b] shadow-2xs">
                                    <SelectGroup>
                                        <SelectItem
                                            value="AGT"
                                            className="text-[#475d5b] shadow-2xs">
                                            Agente de Saude{' '}
                                        </SelectItem>
                                        <SelectItem
                                            value="ADM"
                                            className="text-[#475d5b] shadow-2xs">
                                            Adiministrador{' '}
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </SelectTrigger>
                        </Select>
                        {errors.position && (
                            <div className="text-sm text-red-500">
                                {errors.position.message}
                            </div>
                        )}
                        <p className="text-[#475d5b] self-start"> senha</p>
                        <Input
                            {...register('password')}
                            className=" w-[355px] border-2 border-[#00332c] text-[#475d5b]"
                        />
                        {errors.password && (
                            <div className="text-sm text-red-500">
                                {errors.password.message}
                            </div>
                        )}
                        <p className="text-[#475d5b] self-start">
                            {' '}
                            Confirme a senha
                        </p>
                        <Input
                            {...register('confirm_password')}
                            className=" w-[355px] border-2 border-[#00332c] text-[#475d5b]"
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
                        className="bg-[#faae2b] w-[200px] h-[30px] rounded-4xl">
                        {' '}
                        {isSubmitting ? 'Carregando...' : 'Criar conta'}
                    </button>
                </div>
            </section>
        </form>
    );
}
