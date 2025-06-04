import { Header } from '@/components/header';
import { CadastroDePaciente } from '@/components/cadastroPaciente';
import { Pacientecard } from '@/components/pacientcard';
import { BarraDeBusca } from '@/components/barraDeBusca';
import { Calendario } from '@/components/calendario';
import { MapaVisitas } from '@/components/mapaVisitas';
import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { toast } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { useAuth } from '@/context/contextAuth';

const MapaVisitasDynamic = dynamic(
    () => import('@/components/mapaVisitas').then((mod) => mod.MapaVisitas),
    { ssr: false, loading: () => <p>Carregando mapa...</p> }
);

interface Paciente {
    cpf: string;
    nome: string;
    endereco: string;
    comorbidades?: string;
    situacao?: string;
    agente_id?: number;
    microarea_id?: number;
}

export default function HomePage() {
    const [search, setSearch] = useState('');
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [microareaFiltro, setMicroareaFiltro] = useState<number | undefined>(
        undefined
    );
    const { user } = useAuth();

    const fetchPacientes = async () => {
        try {
            console.log('Buscando pacientes...');
            const response = await api.get<Paciente[]>('/pacientes');
            if (user && user.cargo === 'AGT' && user.microarea_id) {
                const pacientesFiltrados = response.data.filter(
                    (p) => p.microarea_id === user.microarea_id
                );
                setPacientes(pacientesFiltrados);
            } else {
                // Administradores veem todos os pacientes
                setPacientes(response.data);
            }
        } catch (error) {
            console.error('Erro ao buscar lista de pacientes:', error);
            toast.error('Falha ao carregar a lista de pacientes.');
        }
    };

    useEffect(() => {
        fetchPacientes();
    }, []);

    useEffect(() => {
        fetchPacientes();
    }, [user]);

    const handlePacienteAtualizado = () => {
        fetchPacientes();
    };

    const handleMicroareaChange = (id: number | undefined) => {
        setMicroareaFiltro(id);
    };

    return (
        <section className="bg-[#00473e] w-screen h-screen">
            <Header />
            <div className="flex flex-row h-[calc(100vh-var(--header-height,80px))] justify-center pt-7 gap-7">
                {/* Coluna da Agenda */}
                <div className="bg-[#f2f7f5] w-[25vw] rounded-3xl text-[#00332c] py-5 px-4 flex flex-col">
                    <h1 className="bg-[#faae2b] w-32 h-8 flex items-center justify-center rounded-full mb-4">
                        Agenda
                    </h1>
                    <div className="flex-grow overflow-y-auto">
                        <Calendario visualizacaoAgente={true} />
                    </div>
                </div>

                {/* Coluna Central de Pacientes */}
                <div className="bg-[#f2f7f5] w-[40vw] rounded-3xl text-[#00332c] py-5 px-4 flex flex-col items-center">
                    <h1 className="bg-[#faae2b] w-32 h-8 flex items-center justify-center rounded-full mb-4">
                        Pacientes
                    </h1>
                    <div className="w-full max-w-md mb-4 flex items-center justify-center gap-3">
                        <div className="flex-grow">
                            <BarraDeBusca
                                search={search}
                                setSearch={setSearch}
                            />
                        </div>
                        <div className="relative flex-shrink-0">
                            <CadastroDePaciente
                                onPacienteCadastrado={handlePacienteAtualizado}
                            />
                        </div>
                    </div>
                    <div className="w-full flex-grow overflow-y-auto">
                        <Pacientecard
                            search={search}
                            pacientes={pacientes}
                            onPacienteAtualizado={handlePacienteAtualizado}
                        />
                    </div>
                </div>

                {/* Coluna do Mapa */}
                <div className="bg-[#f2f7f5] w-[25vw] rounded-3xl text-[#00332c] py-5 px-4 flex flex-col">
                    <h1 className="bg-[#faae2b] w-32 h-8 flex items-center justify-center rounded-full mb-4">
                        Mapa
                    </h1>
                    <div className="flex-grow">
                        <MapaVisitasDynamic microareaId={microareaFiltro} />
                    </div>
                </div>
            </div>
        </section>
    );
}
