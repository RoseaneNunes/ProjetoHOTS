import axios, { AxiosError } from 'axios';
import 'dotenv/config';

export const api = axios.create({
    baseURL: 'http://localhost:3333/api',
    // baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
    // Buscar o token do localStorage
    const token = localStorage.getItem('authToken');

    // Se o token existir, adicionar ao cabeçalho Authorization
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const checkError = (
    error: unknown,
    customErrorHandler?: (message: string) => void,
    defaultErrorHandler?: () => void
) => {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;

        console.error('Erro de API detalhado:', {
            status: axiosError.response?.status,
            url: axiosError.config?.url,
            method: axiosError.config?.method,
            data: axiosError.response?.data,
        });

        if (axiosError.response?.status === 404) {
            const errorMsg = 'Endpoint não encontrado. Verifique a URL da API.';
            if (customErrorHandler) {
                customErrorHandler(errorMsg);
            } else {
                console.error(errorMsg);
            }
            return;
        }

        if (axiosError.response?.status === 401) {
            if (window.location.pathname !== '/loginPage') {
                localStorage.removeItem('authToken');
                localStorage.removeItem('authUser');
                window.location.href = '/loginPage';
                return;
            }
        }

        if (axiosError.response?.data?.error) {
            const message = axiosError.response.data.error;
            if (customErrorHandler) {
                customErrorHandler(message);
            } else {
                console.error('Erro da API:', message);
            }
            return;
        }
    }

    if (defaultErrorHandler) {
        defaultErrorHandler();
    } else {
        console.error('Erro desconhecido:', error);
    }
};
