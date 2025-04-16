import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Component {...pageProps} />
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 5000,
                    style: {
                        background: '#f2f7f5',
                        color: '#00332c',
                        border: '2px solid #00332c',
                        borderRadius: '10px',
                    },
                    success: {
                        style: {
                            background: '#f2f7f5',
                            border: '2px solid #00473e',
                        },
                        iconTheme: {
                            primary: '#00473e',
                            secondary: '#f2f7f5',
                        },
                    },
                    error: {
                        style: {
                            background: '#f2f7f5',
                            border: '2px solid #d63031',
                        },
                        iconTheme: {
                            primary: '#d63031',
                            secondary: '#f2f7f5',
                        },
                    },
                }}
            />
        </div>
    );
}
