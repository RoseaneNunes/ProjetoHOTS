import {
    HomeIcon,
    LogOutIcon,
    Settings,
    User2Icon,
    UserIcon,
    Users,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useAuth } from '@/context/contextAuth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from './ui/button';
import { Profile } from './profile';

export function Header() {
    const router = useRouter();
    const { user, logout } = useAuth();

    const getInitials = (name: string) => {
        if (!name) return 'U';
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    async function handleToggleLogOut() {
        logout();
        window.localStorage.clear();
        await router.push('/');
    }
    return (
        <header className="bg-[#f2f7f5] flex h-[80px] w-full px-6 items-center justify-between shadow-md rounded-b-2xl">
            <div className="flex items-center gap-2">
                <div className="bg-[#faae2b] p-2 rounded-full">
                    <UserIcon size={24} className="text-[#00473e]" />
                </div>
                <h1 className="text-[#00473e] text-xl font-bold">HOTS</h1>
                <span className="text-[#00473e] text-xs hidden md:inline">
                    Health Organization Task System
                </span>
            </div>

            <div className="flex items-center gap-4">
                {user && (
                    <Link
                        href="/homePage"
                        className="flex items-center gap-1 text-[#00473e] hover:text-[#00332c]"
                        title="Página Inicial">
                        <HomeIcon size={20} />
                        <span className="hidden md:inline">Início</span>
                    </Link>
                )}

                {user && user.cargo === 'ADM' && (
                    <Link
                        href="/admin"
                        className="flex items-center gap-1 text-[#00473e] hover:text-[#00332c]"
                        title="Painel Administrativo">
                        <Settings size={20} />
                        <span className="hidden md:inline">Administração</span>
                    </Link>
                )}
            </div>

            <div className="flex items-center gap-2">
               
                <div className="hidden md:flex flex-col items-end">
                    <span className="text-sm font-medium text-[#00473e]">
                        {user?.nome || 'Usuário'}
                    </span>
                    <span className="text-xs text-gray-500">
                        {user?.cargo === 'ADM'
                            ? 'Administrador'
                            : 'Agente de Saúde'}
                    </span>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-2 border-[#faae2b] p-0 h-10 w-10 overflow-hidden">
                            <Avatar>
                                <AvatarImage
                                    src={user?.avatarUrl}
                                    alt={user?.nome || 'Avatar do usuário'}
                                />
                                <AvatarFallback className="bg-[#faae2b] text-[#00473e]">
                                    {user?.nome ? (
                                        getInitials(user.nome)
                                    ) : (
                                        <User2Icon size={20} />
                                    )}
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />

            

                        {/* <DropdownMenuItem
                            onClick={() => router.push('/configuracoes')}
                            className="cursor-pointer">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Configurações</span>
                        </DropdownMenuItem> */}

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                            onClick={handleToggleLogOut}
                            className="cursor-pointer text-red-500 focus:text-red-500">
                            <LogOutIcon className="mr-2 h-4 w-4" />
                            <span>Sair</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
