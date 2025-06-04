import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface User {
    id: number;
    email: string;
    nome: string;
    cargo?: string;
    microarea_id?: number | null;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
    isLoggedIn: () => Boolean;
    isReady: boolean;
}

type Props = { children: React.ReactNode };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isReady, setIsReady] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const storedToken = Cookies.get('token');
        const storedUserString = Cookies.get('authUser'); // Tenta carregar o usuário também

        if (storedToken) {
            setToken(storedToken);
            if (storedUserString) {
                try {
                    setUser(JSON.parse(storedUserString));
                } catch (e) {
                    console.error('Erro ao parsear usuário do cookie:', e);
                    Cookies.remove('authUser'); // Limpa cookie inválido
                }
            }
        }
        setIsReady(true);
    }, []);

    const login = (userData: User, authToken: string) => {
        Cookies.set('token', authToken, { expires: 7, path: '/' }); // Adiciona path: '/' para consistência
        Cookies.set('authUser', JSON.stringify(userData), {
            expires: 7,
            path: '/',
        }); // Armazena o usuário
        setToken(authToken);
        setUser(userData); // Define o usuário no estado
        setIsReady(true); // Garante que está pronto
        router.push('/homePage');
    };

    const logout = () => {
        Cookies.remove('token', { path: '/' });
        Cookies.remove('authUser', { path: '/' }); // Remove o usuário também
        setToken(null);
        setUser(null); // Limpa o usuário do estado
        setIsReady(true); // Garante que está pronto
        router.push('/loginPage');
    };

    const isLoggedIn = () => {
        const currentToken = Cookies.get('token');
        return !!currentToken;
    };

    const contextValue: AuthContextType = {
        user,
        token,
        login,
        logout,
        isLoggedIn,
        isReady,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {isReady ? children : <div>Carregando aplicação...</div>}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};
