import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DetalhesTarefaProps {
    tarefa: EventoCalendario | null;
    aberto: boolean;
    onFechar: () => void;
    onEditar?: (id: number) => void;
    onConcluir?: (id: number) => void;
    onExcluir?: (id: number) => void;
}

// Reutilizar a interface EventoCalendario do componente calendario.tsx
interface EventoCalendario {
    id: number;
    title: string;
    start: Date;
    end: Date;
    status: string;
    prioridade: string;
    descricao?: string;
    paciente?: string;
    agente?: string;
    allDay?: boolean;
    resource?: any;
}

export function DetalhesTarefa({
    tarefa,
    aberto,
    onFechar,
    onEditar,
    onConcluir,
    onExcluir,
}: DetalhesTarefaProps) {
    if (!tarefa) return null;

    const formatarData = (data: Date) => {
        return format(data, "PPP 'às' HH:mm", { locale: ptBR });
    };

    // Função para definir a cor do badge de prioridade
    const getCorPrioridade = (prioridade: string) => {
        switch (prioridade.toLowerCase()) {
            case 'alta':
                return 'bg-red-500';
            case 'media':
                return 'bg-yellow-500';
            case 'baixa':
                return 'bg-green-500';
            default:
                return 'bg-blue-500';
        }
    };

    // Função para definir a cor do badge de status
    const getCorStatus = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pendente':
                return 'bg-yellow-500';
            case 'em andamento':
                return 'bg-blue-500';
            case 'concluida':
            case 'concluída':
                return 'bg-green-500';
            case 'cancelada':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <Dialog open={aberto} onOpenChange={onFechar}>
            <DialogContent className="bg-white text-gray-800 sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                        {tarefa.title}
                    </DialogTitle>
                    <DialogDescription className="flex gap-2 mt-2">
                        <Badge className={getCorPrioridade(tarefa.prioridade)}>
                            Prioridade: {tarefa.prioridade}
                        </Badge>
                        <Badge className={getCorStatus(tarefa.status)}>
                            Status: {tarefa.status}
                        </Badge>
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 my-4">
                    {tarefa.descricao && (
                        <div>
                            <h3 className="font-medium text-gray-700">
                                Descrição:
                            </h3>
                            <p className="text-gray-600">{tarefa.descricao}</p>
                        </div>
                    )}

                    <div>
                        <h3 className="font-medium text-gray-700">
                            Data e Hora:
                        </h3>
                        <p className="text-gray-600">
                            {formatarData(tarefa.start)}
                        </p>
                    </div>

                    {tarefa.paciente && (
                        <div>
                            <h3 className="font-medium text-gray-700">
                                Paciente:
                            </h3>
                            <p className="text-gray-600">{tarefa.paciente}</p>
                        </div>
                    )}

                    {tarefa.agente && (
                        <div>
                            <h3 className="font-medium text-gray-700">
                                Agente Responsável:
                            </h3>
                            <p className="text-gray-600">{tarefa.agente}</p>
                        </div>
                    )}
                </div>

                <DialogFooter className="flex justify-end space-x-2">
                    {tarefa.status !== 'concluida' &&
                        tarefa.status !== 'concluída' &&
                        onConcluir && (
                            <Button
                                onClick={() => onConcluir(tarefa.id)}
                                className="bg-green-500 hover:bg-green-600 text-white">
                                Marcar como Concluída
                            </Button>
                        )}

                    {onEditar && (
                        <Button
                            onClick={() => onEditar(tarefa.id)}
                            className="bg-blue-500 hover:bg-blue-600 text-white">
                            Editar
                        </Button>
                    )}

                    {onExcluir && (
                        <Button
                            onClick={() => {
                                if (
                                    window.confirm(
                                        'Tem certeza que deseja excluir esta tarefa?'
                                    )
                                ) {
                                    onExcluir(tarefa.id);
                                }
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white">
                            Excluir
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
