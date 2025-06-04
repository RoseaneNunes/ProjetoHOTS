import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Edit, Trash2, Plus, AlertTriangle } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Interfaces
interface Microarea {
    id: number;
    nome: string;
    descricao: string | null;
}

// Schema para validação
const microareaSchema = z.object({
    nome: z.string().nonempty('O nome é obrigatório'),
    descricao: z.string().optional().nullable(),
});

type MicroareaFormData = z.infer<typeof microareaSchema>;

export function GerenciamentoMicroareas() {
    const [microareas, setMicroareas] = useState<Microarea[]>([]);
    const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
    const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
    const [modalExclusaoAberto, setModalExclusaoAberto] = useState(false);
    const [microareaParaEditar, setMicroareaParaEditar] =
        useState<Microarea | null>(null);
    const [microareaParaExcluir, setMicroareaParaExcluir] =
        useState<Microarea | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    const [excluindo, setExcluindo] = useState(false);

    // Form para cadastro
    const {
        register: registerCadastro,
        handleSubmit: handleSubmitCadastro,
        reset: resetCadastro,
        formState: { errors: errorsCadastro },
    } = useForm<MicroareaFormData>({
        resolver: zodResolver(microareaSchema),
        defaultValues: {
            nome: '',
            descricao: '',
        },
    });

    // Form para edição
    const {
        register: registerEdicao,
        handleSubmit: handleSubmitEdicao,
        reset: resetEdicao,
        setValue: setValueEdicao,
        formState: { errors: errorsEdicao },
    } = useForm<MicroareaFormData>({
        resolver: zodResolver(microareaSchema),
        defaultValues: {
            nome: '',
            descricao: '',
        },
    });

    // Buscar microáreas
    const buscarMicroareas = async () => {
        try {
            setCarregando(true);
            const response = await api.get('/microareas');
            setMicroareas(response.data);
        } catch (error) {
            console.error('Erro ao buscar microáreas:', error);
            toast.error('Falha ao carregar a lista de microáreas');
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        buscarMicroareas();
    }, []);

    // Funções para cadastro
    const handleCadastrarMicroarea = async (data: MicroareaFormData) => {
        try {
            setSalvando(true);
            await api.post('/microareas', data);
            toast.success('Microárea cadastrada com sucesso!');
            setModalCadastroAberto(false);
            resetCadastro();
            buscarMicroareas();
        } catch (error: any) {
            console.error('Erro ao cadastrar microárea:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao cadastrar microárea. Tente novamente.');
            }
        } finally {
            setSalvando(false);
        }
    };

    // Funções para edição
    const abrirModalEdicao = (microarea: Microarea) => {
        setMicroareaParaEditar(microarea);
        setValueEdicao('nome', microarea.nome);
        setValueEdicao('descricao', microarea.descricao || '');
        setModalEdicaoAberto(true);
    };

    const handleEditarMicroarea = async (data: MicroareaFormData) => {
        if (!microareaParaEditar) return;

        try {
            setSalvando(true);
            await api.put(`/microareas/${microareaParaEditar.id}`, data);
            toast.success('Microárea atualizada com sucesso!');
            setModalEdicaoAberto(false);
            resetEdicao();
            buscarMicroareas();
        } catch (error: any) {
            console.error('Erro ao atualizar microárea:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao atualizar microárea. Tente novamente.');
            }
        } finally {
            setSalvando(false);
        }
    };

    // Funções para exclusão
    const abrirModalExclusao = (microarea: Microarea) => {
        setMicroareaParaExcluir(microarea);
        setModalExclusaoAberto(true);
    };

    const handleExcluirMicroarea = async () => {
        if (!microareaParaExcluir) return;

        try {
            setExcluindo(true);
            await api.delete(`/microareas/${microareaParaExcluir.id}`);
            toast.success('Microárea excluída com sucesso!');
            setModalExclusaoAberto(false);
            buscarMicroareas();
        } catch (error: any) {
            console.error('Erro ao excluir microárea:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao excluir microárea. Tente novamente.');
            }
        } finally {
            setExcluindo(false);
        }
    };

    const commonInputClassName =
        'w-full h-10 px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#faae2b] focus:border-[#faae2b]';
    const errorRingClassName = 'ring-2 ring-red-500 border-red-500';
    const labelClassName = 'block text-sm font-medium text-gray-300 mb-1';

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                    Gerenciamento de Microáreas
                </h2>
                <Button
                    onClick={() => setModalCadastroAberto(true)}
                    className="bg-[#00473e] hover:bg-[#00332c]">
                    <Plus size={18} className="mr-2" />
                    Nova Microárea
                </Button>
            </div>

            {carregando ? (
                <div className="text-center py-8">
                    <p>Carregando microáreas...</p>
                </div>
            ) : microareas.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    <p>Nenhuma microárea cadastrada.</p>
                    <p className="text-sm mt-2">
                        Clique em "Nova Microárea" para começar.
                    </p>
                </div>
            ) : (
                <div className="border rounded-md overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">ID</TableHead>
                                <TableHead>Nome</TableHead>
                                <TableHead>Descrição</TableHead>
                                <TableHead className="w-[100px] text-right">
                                    Ações
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {microareas.map((microarea) => (
                                <TableRow key={microarea.id}>
                                    <TableCell className="font-medium">
                                        {microarea.id}
                                    </TableCell>
                                    <TableCell>{microarea.nome}</TableCell>
                                    <TableCell>
                                        {microarea.descricao || '-'}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end space-x-2">
                                            <Button
                                                className="p-1 text-teal-600 hover:text-teal-800 hover:bg-gray-100 rounded-full"
                                                size="icon"
                                                onClick={() =>
                                                    abrirModalEdicao(microarea)
                                                }
                                                title="Editar">
                                                <Edit size={16} />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() =>
                                                    abrirModalExclusao(
                                                        microarea
                                                    )
                                                }
                                                className="text-red-500 border-red-200 hover:text-red-700 hover:border-red-300"
                                                title="Excluir">
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}

            {/* Modal de Cadastro */}
            <Dialog
                open={modalCadastroAberto}
                onOpenChange={setModalCadastroAberto}>
                <DialogContent className="bg-gray-800 text-white sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-center">
                            Cadastrar Nova Microárea
                        </DialogTitle>
                    </DialogHeader>

                    <form
                        onSubmit={handleSubmitCadastro(
                            handleCadastrarMicroarea
                        )}
                        className="space-y-4 py-4">
                        <div>
                            <label htmlFor="nome" className={labelClassName}>
                                Nome da Microárea
                            </label>
                            <Input
                                id="nome"
                                placeholder="Ex: Centro, Zona Norte, etc."
                                {...registerCadastro('nome')}
                                className={`${commonInputClassName} ${
                                    errorsCadastro.nome
                                        ? errorRingClassName
                                        : ''
                                }`}
                            />
                            {errorsCadastro.nome && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errorsCadastro.nome.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="descricao"
                                className={labelClassName}>
                                Descrição
                            </label>
                            <Textarea
                                id="descricao"
                                placeholder="Descrição detalhada da microárea"
                                {...registerCadastro('descricao')}
                                className={`${commonInputClassName} min-h-[80px]`}
                            />
                        </div>

                        <DialogFooter className="mt-6">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setModalCadastroAberto(false)}
                                disabled={salvando}>
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                className="bg-[#00473e] hover:bg-[#00332c]"
                                disabled={salvando}>
                                {salvando ? 'Salvando...' : 'Salvar'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Modal de Edição */}
            <Dialog
                open={modalEdicaoAberto}
                onOpenChange={setModalEdicaoAberto}>
                <DialogContent className="bg-gray-800 text-white sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-center">
                            Editar Microárea
                        </DialogTitle>
                    </DialogHeader>

                    <form
                        onSubmit={handleSubmitEdicao(handleEditarMicroarea)}
                        className="space-y-4 py-4">
                        <div>
                            <label
                                htmlFor="nome-edicao"
                                className={labelClassName}>
                                Nome da Microárea
                            </label>
                            <Input
                                id="nome-edicao"
                                placeholder="Ex: Centro, Zona Norte, etc."
                                {...registerEdicao('nome')}
                                className={`${commonInputClassName} ${
                                    errorsEdicao.nome ? errorRingClassName : ''
                                }`}
                            />
                            {errorsEdicao.nome && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errorsEdicao.nome.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="descricao-edicao"
                                className={labelClassName}>
                                Descrição
                            </label>
                            <Textarea
                                id="descricao-edicao"
                                placeholder="Descrição detalhada da microárea"
                                {...registerEdicao('descricao')}
                                className={`${commonInputClassName} min-h-[80px]`}
                            />
                        </div>

                        <DialogFooter className="mt-6">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setModalEdicaoAberto(false)}
                                disabled={salvando}>
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                className="bg-[#00473e] hover:bg-[#00332c]"
                                disabled={salvando}>
                                {salvando ? 'Salvando...' : 'Salvar Alterações'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Modal de Exclusão */}
            <Dialog
                open={modalExclusaoAberto}
                onOpenChange={setModalExclusaoAberto}>
                <DialogContent className="bg-gray-800 text-white sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-red-600">
                            <AlertTriangle size={20} />
                            Confirmar exclusão
                        </DialogTitle>
                    </DialogHeader>

                    <div className="py-4">
                        <p className="text-gray-300">
                            Tem certeza que deseja excluir a microárea{' '}
                            <span className="font-semibold">
                                {microareaParaExcluir?.nome}
                            </span>
                            ?
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Esta ação não pode ser desfeita. Todos os agentes e
                            pacientes desta microárea ficarão sem microárea
                            atribuída.
                        </p>
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setModalExclusaoAberto(false)}
                            disabled={excluindo}>
                            Cancelar
                        </Button>
                        <Button
                            onClick={handleExcluirMicroarea}
                            className="bg-red-600 hover:bg-red-700"
                            disabled={excluindo}>
                            {excluindo ? 'Excluindo...' : 'Excluir Microárea'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
