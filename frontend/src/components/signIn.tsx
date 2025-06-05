import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { api, checkError } from '@/lib/api';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/contextAuth';
import { useRouter } from 'next/router';
import { ArrowRightIcon } from 'lucide-react';

const signInSchema = z.object({
    email: z.string().email('E-mail inválido'),
    senha: z.string().min(8, 'Esse campo tem que ter pelo menos 8 caracteres'),
});

type signInSchema = z.infer<typeof signInSchema>;
type signInProps = {
    setMudarPage: (value: boolean) => void;
};

export default function SingIn({ setMudarPage }: signInProps) {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<signInSchema>({ resolver: zodResolver(signInSchema) });

    const auth = useAuth();
    const router = useRouter();

    async function handleSignIn(data: signInSchema) {
        try {
            const response = await api.post('/agentes/login', data);
            const { agente, token } = response.data;

            if (agente && token) {
                auth.login(agente, token);
                localStorage.setItem('authToken', token);
                localStorage.setItem('authUser', JSON.stringify(agente));
                toast.success('Login realizado com sucesso!');
                router.push('/homePage');
            } else {
                console.error(
                    'Resposta da API de login inválida:',
                    response.data
                );
                toast.error(
                    'Resposta inválida do servidor ao tentar fazer login.'
                );
            }
        } catch (error) {
            checkError(
                error,
                (message) => toast.error(message),
                () =>
                    toast.error(
                        'Erro ao fazer login: ' + (error || 'Ocorreu um erro.')
                    )
            );
        }
    }

    return (
        <div>
            <section className="flex flex-col w-screen h-screen absolute z-40 items-center bg-[#f2f7f5] justify-center gap-3 ">
                <h1 className="text-[#00473e] text-7xl font-bold">HOTS</h1>
                <h2 className="text-[#00473e] bg-[#faae2b] p-1.5 rounded-3xl">
                    Heath organization Task System
                </h2>

                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className="xl:w-[568px] w-[90vw] h-[60vh] md:w-[60vw] relative border-2 border-[#00332c] rounded-4xl flex flex-col items-center justify-center shadow-xl shadow-[#00332c]">
                        <div className="w-full absolute top-0 left-0 flex justify-center">
                            <h3 className="text-white w-[200px] h-16 bg-[#00332c] absolute left-1/2 -translate-x-1/2 -top-0 text-3xl text-center rounded-b-4xl shadow-xl flex items-center justify-center">
                                Login
                            </h3>
                            <button
                                type="button"
                                onClick={() => setMudarPage(false)}
                                className="inline absolute top-4 right-4">
                                <ArrowRightIcon size={40} color="#00332c" />
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-4 w-full px-4">
                            <Input
                                disabled={isSubmitting}
                                placeholder="Email"
                                {...register('email')}
                                className={`w-full max-w-md h-[7vh] border-2 border-[#00332c] text-[#475d5b] hover:ring-1 ${
                                    errors.email ? 'ring-2 ring-red-500' : ''
                                }`}
                            />
                            {errors.email?.message && (
                                <p className="text-red-500 text-sm self-start w-full max-w-md">
                                    {errors.email.message}
                                </p>
                            )}
                            <Input
                                disabled={isSubmitting}
                                placeholder="Senha"
                                type="password"
                                {...register('senha')}
                                className={`w-full max-w-md h-[7vh] border-2 border-[#00332c] text-[#475d5b] hover:ring-1 ${
                                    errors.senha ? 'ring-2 ring-red-500' : ''
                                }`}
                            />
                            {errors.senha?.message && (
                                <p className="text-red-500 text-sm self-start w-full max-w-md">
                                    {errors.senha.message}
                                </p>
                            )}
                            <button
                                type="button"
                                onClick={() => setMudarPage(false)}
                                className="text-[#00332c] self-end mt-2 hover:text-neutral-400 text-sm mr-2">
                                Não tem cadastro?
                            </button>
                        </div>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="bg-[#faae2b] xl:w-[300px] h-[40px] w-[80%] max-w-xs mt-6 mb-4 rounded-4xl shadow-xl hover:ring hover:ring-amber-500 hover:ring-offset-4 text-[#f2f7f5]">
                            {isSubmitting ? 'Entrando...' : 'Entrar'}
                        </button>
                    </div>
                </form>
            </section>
            
        </div>
    );
}
