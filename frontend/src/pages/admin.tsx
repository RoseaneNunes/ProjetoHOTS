import { useState } from 'react';
import { Header } from '@/components/header';
import { TabsGerenciamento } from '@/components/admin/tabsGerenciamento';
import { useAuth } from '@/context/contextAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function AdminPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Verificar se o usuário está autenticado e é administrador
        if (!isLoading && (!user || user.cargo !== 'ADM')) {
            toast.error('Acesso restrito a administradores');
            router.push('/');
        }
    }, [user, isLoading, router]);

    // Se estiver carregando ou não for administrador, mostra tela de carregamento
    if (isLoading || !user || user.cargo !== 'ADM') {
        return (
            <div className="bg-[#00473e] min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Verificando permissões...
                        </h2>
                        <p className="text-gray-600">
                            Aguarde enquanto verificamos suas credenciais.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#00473e] min-h-screen flex flex-col">
            <Header />
            <div className="container mx-auto py-8 px-4 flex-grow">
                <h1 className="text-2xl font-bold text-white mb-6">
                    Painel Administrativo
                </h1>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <TabsGerenciamento />
                </div>
            </div>
        </div>
    );
}
