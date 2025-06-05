import { useState, useEffect } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import { api } from '@/lib/api';
import { toast } from 'react-hot-toast';
import 'leaflet/dist/leaflet.css';
import { useAuth } from '@/context/contextAuth';

const markerIcon = new Icon({
    iconUrl: '/marker-icon.png',
    iconRetinaUrl: '/marker-icon-2x.png',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const homeIcon = new Icon({
    iconUrl: '/home-icon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

interface PacienteLocation {
    id: string;
    cpf: string;
    nome: string;
    endereco: string;
    lat: number;
    lng: number;
    comorbidades?: string;
    situacao?: string;
    microarea_id?: number;
    proximaVisita?: Date;
}

interface MapaVisitasProps {
    microareaId?: number;
}

export function MapaVisitas({ microareaId }: MapaVisitasProps) {
    const [pacientes, setPacientes] = useState<PacienteLocation[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [rota, setRota] = useState<[number, number][]>([]);
    const [centroMapa, setCentroMapa] = useState<[number, number]>([
        -7.23069, -35.88125,
    ]);
    const [rotaOtimizada, setRotaOtimizada] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const buscarPacientes = async () => {
            try {
                setCarregando(true);
                const response = await api.get('/pacientes');

                let pacientesFiltrados = response.data;

                if (user && user.cargo === 'AGT' && user.microarea_id) {
                    pacientesFiltrados = pacientesFiltrados.filter(
                        (p: any) => p.microarea_id === user.microarea_id
                    );
                } else if (microareaId) {
                    pacientesFiltrados = pacientesFiltrados.filter(
                        (p: any) => p.microarea_id === microareaId
                    );
                }

                const pacientesComLocalizacao = pacientesFiltrados.map(
                    (p: any) => {
                        const lat =
                            centroMapa[0] + (Math.random() - 0.5) * 0.05;
                        const lng =
                            centroMapa[1] + (Math.random() - 0.5) * 0.05;

                        return {
                            ...p,
                            lat,
                            lng,
                        };
                    }
                );

                setPacientes(pacientesComLocalizacao);

                if (pacientesComLocalizacao.length > 0) {
                    const primeiroPaciente = pacientesComLocalizacao[0];
                    setCentroMapa([primeiroPaciente.lat, primeiroPaciente.lng]);
                }
            } catch (error) {
                console.error('Erro ao buscar pacientes:', error);
                toast.error('Erro ao carregar pacientes no mapa');
            } finally {
                setCarregando(false);
            }
        };

        buscarPacientes();
    }, [microareaId, user]);

    const gerarRota = () => {
        if (pacientes.length === 0) return;

        const pontoInicial: [number, number] = centroMapa;

        const pontos = pacientes.map((p) => [p.lat, p.lng] as [number, number]);

        const rotaCalculada: [number, number][] = [pontoInicial];
        const pontosRestantes = [...pontos];

        while (pontosRestantes.length > 0) {
            const ultimoPonto = rotaCalculada[rotaCalculada.length - 1];

            let indiceMaisProximo = 0;
            let menorDistancia = calcularDistancia(
                ultimoPonto,
                pontosRestantes[0]
            );

            for (let i = 1; i < pontosRestantes.length; i++) {
                const distancia = calcularDistancia(
                    ultimoPonto,
                    pontosRestantes[i]
                );
                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    indiceMaisProximo = i;
                }
            }

            rotaCalculada.push(pontosRestantes[indiceMaisProximo]);
            pontosRestantes.splice(indiceMaisProximo, 1);
        }

        rotaCalculada.push(pontoInicial);

        setRota(rotaCalculada);
        setRotaOtimizada(true);
        toast.success('Rota de visitas otimizada gerada!');
    };

    const calcularDistancia = (
        ponto1: [number, number],
        ponto2: [number, number]
    ) => {
        const [lat1, lng1] = ponto1;
        const [lat2, lng2] = ponto2;

        return Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lng2 - lng1, 2));
    };

    const limparRota = () => {
        setRota([]);
        setRotaOtimizada(false);
    };

    if (carregando) {
        return (
            <div className="flex justify-center items-center h-full">
                Carregando mapa...
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <div className="mb-3 flex justify-between">
                <button
                    onClick={gerarRota}
                    className="bg-[#faae2b] hover:bg-amber-500 text-gray-900 rounded-md px-3 py-2 text-sm font-medium"
                    disabled={pacientes.length === 0 || rotaOtimizada}>
                    Gerar Rota de Visitas
                </button>
                {rotaOtimizada && (
                    <button
                        onClick={limparRota}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md px-3 py-2 text-sm font-medium ml-2">
                        Limpar Rota
                    </button>
                )}
            </div>

            <div className="flex-grow rounded-md overflow-hidden border border-gray-300">
                {pacientes.length === 0 ? (
                    <div className="flex flex-col justify-center items-center h-full bg-gray-100 text-gray-500">
                        <p>Nenhum paciente cadastrado com localização.</p>
                        <p className="text-sm mt-2">
                            Cadastre pacientes para visualizar no mapa.
                        </p>
                    </div>
                ) : (
                    <MapContainer
                        center={centroMapa}
                        zoom={14}
                        style={{ height: '100%', width: '100%' }}
                        whenCreated={(map) => {
                            if (pacientes.length > 0) {
                                const bounds = pacientes.reduce((bounds, p) => {
                                    bounds.extend([p.lat, p.lng]);
                                    return bounds;
                                }, L.latLngBounds([pacientes[0].lat, pacientes[0].lng], [pacientes[0].lat, pacientes[0].lng]));

                                map.fitBounds(bounds, { padding: [50, 50] });
                            }
                        }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={centroMapa} icon={homeIcon}>
                            <Popup>
                                <div>
                                    <h3 className="font-bold">
                                        Unidade de Saúde
                                    </h3>
                                    <p>Ponto de partida e retorno</p>
                                </div>
                            </Popup>
                        </Marker>

                        {pacientes.map((paciente) => (
                            <Marker
                                key={paciente.cpf}
                                position={[paciente.lat, paciente.lng]}
                                icon={markerIcon}>
                                <Popup>
                                    <div>
                                        <h3 className="font-bold">
                                            {paciente.nome}
                                        </h3>
                                        <p>{paciente.endereco}</p>
                                        {paciente.comorbidades && (
                                            <p>
                                                <strong>Comorbidades:</strong>{' '}
                                                {paciente.comorbidades}
                                            </p>
                                        )}
                                        {paciente.situacao && (
                                            <p>
                                                <strong>Situação:</strong>{' '}
                                                {paciente.situacao}
                                            </p>
                                        )}
                                    </div>
                                </Popup>
                            </Marker>
                        ))}

                        {rota.length > 0 && (
                            <Polyline
                                positions={rota}
                                color="#faae2b"
                                weight={4}
                                opacity={0.7}
                                dashArray="10, 10"
                            />
                        )}
                    </MapContainer>
                )}
            </div>

            {rotaOtimizada && (
                <div className="mt-3 bg-gray-100 p-3 rounded-md">
                    <h3 className="font-semibold text-sm mb-1">
                        Informações da Rota:
                    </h3>
                    <p className="text-xs">
                        Total de visitas:{' '}
                        <span className="font-medium">{pacientes.length}</span>
                    </p>
                    <p className="text-xs">
                        Pacientes da Microárea:{' '}
                        <span className="font-medium">
                            {microareaId || 'Todas'}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}
