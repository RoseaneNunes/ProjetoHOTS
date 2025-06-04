import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/contextAuth';

export default function Home() {
    const router = useRouter();
    const { isLoggedIn, isReady } = useAuth(); // Adicione isReady e token se necessário para lógica mais complexa

    useEffect(() => {
        // Espera o AuthProvider estar pronto para evitar redirecionamentos prematuros
        if (isReady) {
            if (!isLoggedIn()) {
                router.push('/loginPage');
            } else {
                // Se estiver logado, talvez redirecionar para a homePage?
                router.push('/homePage');
            }
        }
    }, [isReady, isLoggedIn, router]);

    if (!isReady || !isLoggedIn()) {
        return <div>Carregando...</div>; // Ou null, ou um spinner
    }

    return (
        <>
            <h1>Redirecionando...</h1>
        </>
    );
}
