import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Edit, Trash2, Plus, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/context/contextAuth';

// Interfaces
interface Agente {
    id: number;
    nome: string;
    email: string;
    cargo: string | null;
    microarea_id: number | null;
    microarea?: {
        id: number;
        nome: string;
    } | null;
}

interface Microarea {
    id: number;
    nome: string;
}

// Schema para validação de cadastro
const agenteCadastroSchema = z.object({
    nome: z.string().nonempty('O nome é obrigatório'),
    email: z.string().email('Email inválido').nonempty('O email é obrigatório'),
    senha: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    cargo: z.string().nonempty('O cargo é obrigatório'),
    microarea_id: z.string().refine(
        (value, ctx) => {
            // Se for administrador (ADM), microárea é opcional
            if (ctx.parent.cargo === 'ADM') return true;
            // Para agentes (AGT), microárea é obrigatória e não pode ser "null"
            return value && value !== 'null';
        },
        {
            message: 'Agentes de saúde devem estar associados a uma microárea',
        }
    ),
});

// Schema para validação de edição
const agenteEdicaoSchema = z.object({
    nome: z.string().nonempty('O nome é obrigatório'),
    email: z.string().email('Email inválido').nonempty('O email é obrigatório'),
    senha: z.string().optional(), // Senha opcional na edição
    cargo: z.string().nonempty('O cargo é obrigatório'),
    microarea_id: z.string().refine(
        (value, ctx) => {
            if (ctx.parent.cargo === 'ADM') return true;
            return value && value !== 'null';
        },
        {
            message: 'Agentes de saúde devem estar associados a uma microárea',
        }
    ),
});

type AgenteCadastroFormData = z.infer<typeof agenteCadastroSchema>;
type AgenteEdicaoFormData = z.infer<typeof agenteEdicaoSchema>;

export function GerenciamentoAgentes() {
    const [agentes, setAgentes] = useState<Agente[]>([]);
    const [microareas, setMicroareas] = useState<Microarea[]>([]);
    const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
    const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
    const [modalExclusaoAberto, setModalExclusaoAberto] = useState(false);
    const [agenteParaEditar, setAgenteParaEditar] = useState<Agente | null>(
        null
    );
    const [agenteParaExcluir, setAgenteParaExcluir] = useState<Agente | null>(
        null
    );
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    const [excluindo, setExcluindo] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const { user } = useAuth();

    // Form para cadastro
    const {
        register: registerCadastro,
        handleSubmit: handleSubmitCadastro,
        control: controlCadastro,
        reset: resetCadastro,
        formState: { errors: errorsCadastro },
    } = useForm<AgenteCadastroFormData>({
        resolver: zodResolver(agenteCadastroSchema),
        defaultValues: {
            nome: '',
            email: '',
            senha: '',
            cargo: 'AGT', // Default para Agente
            microarea_id: '',
        },
    });

    // Form para edição
    const {
        register: registerEdicao,
        handleSubmit: handleSubmitEdicao,
        control: controlEdicao,
        reset: resetEdicao,
        setValue: setValueEdicao,
        watch: watchEdicao,
        formState: { errors: errorsEdicao },
    } = useForm<AgenteEdicaoFormData>({
        resolver: zodResolver(agenteEdicaoSchema),
        defaultValues: {
            nome: '',
            email: '',
            senha: '',
            cargo: '',
            microarea_id: '',
        },
    });

    // Buscar agentes e microáreas
    const buscarAgentes = async () => {
        try {
            setCarregando(true);
            const response = await api.get('/agentes');
            setAgentes(response.data);
        } catch (error) {
            console.error('Erro ao buscar agentes:', error);
            toast.error('Falha ao carregar a lista de agentes');
        } finally {
            setCarregando(false);
        }
    };

    const buscarMicroareas = async () => {
        try {
            const response = await api.get('/microareas');
            setMicroareas(response.data);
        } catch (error) {
            console.error('Erro ao buscar microáreas:', error);
            toast.error('Falha ao carregar a lista de microáreas');
        }
    };

    useEffect(() => {
        Promise.all([buscarAgentes(), buscarMicroareas()]);
    }, []);

    // Funções para cadastro
    const handleCadastrarAgente = async (data: AgenteCadastroFormData) => {
        try {
            setSalvando(true);

            // Converter microarea_id para número ou null
            const payload = {
                ...data,
                microarea_id:
                    data.microarea_id && data.microarea_id !== 'null'
                        ? Number(data.microarea_id)
                        : null,
            };

            await api.post('/agentes', payload);
            toast.success('Agente cadastrado com sucesso!');
            setModalCadastroAberto(false);
            resetCadastro();
            buscarAgentes();
        } catch (error: any) {
            console.error('Erro ao cadastrar agente:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao cadastrar agente. Tente novamente.');
            }
        } finally {
            setSalvando(false);
        }
    };

    // Funções para edição
    const abrirModalEdicao = (agente: Agente) => {
        setAgenteParaEditar(agente);
        setValueEdicao('nome', agente.nome);
        setValueEdicao('email', agente.email);
        setValueEdicao('senha', ''); // Limpar campo de senha
        setValueEdicao('cargo', agente.cargo || 'AGT');
        setValueEdicao(
            'microarea_id',
            agente.microarea_id ? String(agente.microarea_id) : ''
        );
        setModalEdicaoAberto(true);
    };

    const handleEditarAgente = async (data: AgenteEdicaoFormData) => {
        if (!agenteParaEditar) return;

        try {
            setSalvando(true);

            // Só incluir a senha se foi fornecida
            const payload: any = {
                nome: data.nome,
                email: data.email,
                cargo: data.cargo,
                microarea_id:
                    data.microarea_id && data.microarea_id !== 'null'
                        ? Number(data.microarea_id)
                        : null,
            };

            if (data.senha) {
                payload.senha = data.senha;
            }

            await api.put(`/agentes/${agenteParaEditar.id}`, payload);
            toast.success('Agente atualizado com sucesso!');
            setModalEdicaoAberto(false);
            resetEdicao();
            buscarAgentes();
        } catch (error: any) {
            console.error('Erro ao atualizar agente:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao atualizar agente. Tente novamente.');
            }
        } finally {
            setSalvando(false);
        }
    };

    // Funções para exclusão
    const abrirModalExclusao = (agente: Agente) => {
        if (user && agente.id === user.id) {
            toast.error(
                'Não é possível excluir sua própria conta para evitar perda de acesso administrativo.',
                { duration: 5000 }
            );
            return;
        }
        setAgenteParaExcluir(agente);
        setModalExclusaoAberto(true);
    };

    const handleExcluirAgente = async () => {
        if (!agenteParaExcluir) return;

        try {
            setExcluindo(true);
            await api.delete(`/agentes/${agenteParaExcluir.id}`);
            toast.success('Agente excluído com sucesso!');
            setModalExclusaoAberto(false);
            buscarAgentes();
        } catch (error: any) {
            console.error('Erro ao excluir agente:', error);
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao excluir agente. Tente novamente.');
            }
        } finally {
            setExcluindo(false);
        }
    };

    // Função para mostrar o cargo formatado
    const formatarCargo = (cargo: string | null) => {
        if (!cargo) return '-';
        switch (cargo) {
            case 'ADM':
                return 'Administrador';
            case 'AGT':
                return 'Agente';
            default:
                return cargo;
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
                    Gerenciamento de Agentes
                </h2>
                <Button
                    onClick={() => setModalCadastroAberto(true)}
                    className="bg-[#00473e] hover:bg-[#00332c]">
                    <Plus size={18} className="mr-2" />
                    Novo Agente
                </Button>
            </div>

            {carregando ? (
                <div className="text-center py-8">
                    <p>Carregando agentes...</p>
                </div>
            ) : agentes.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    <p>Nenhum agente cadastrado.</p>
                    <p className="text-sm mt-2">
                        Clique em "Novo Agente" para começar.
                    </p>
                </div>
            ) : (
                <div className="border rounded-md overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">ID</TableHead>
                                <TableHead>Nome</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Cargo</TableHead>
                                <TableHead>Microárea</TableHead>
                                <TableHead className="w-[100px] text-right">
                                    Ações
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {agentes.map((agente) => (
                                <TableRow key={agente.id}>
                                    <TableCell className="font-medium">
                                        {agente.id}
                                    </TableCell>
                                    <TableCell>{agente.nome}</TableCell>
                                    <TableCell>{agente.email}</TableCell>
                                    <TableCell>
                                        {formatarCargo(agente.cargo)}
                                    </TableCell>
                                    <TableCell>
                                        {agente.microarea?.nome || '-'}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end space-x-2">
                                            <Button
                                                className="p-1 text-teal-600 hover:text-teal-800 hover:bg-gray-100 rounded-full"
                                                size="icon"
                                                onClick={() =>
                                                    abrirModalEdicao(agente)
                                                }
                                                title="Editar">
                                                <Edit size={16} />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() =>
                                                    abrirModalExclusao(agente)
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
                            Cadastrar Novo Agente
                        </DialogTitle>
                    </DialogHeader>

                    <form
                        onSubmit={handleSubmitCadastro(handleCadastrarAgente)}
                        className="space-y-4 py-4">
                        <div>
                            <label htmlFor="nome" className={labelClassName}>
                                Nome Completo
                            </label>
                            <Input
                                id="nome"
                                placeholder="Nome do agente"
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
                            <label htmlFor="email" className={labelClassName}>
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="email@exemplo.com"
                                {...registerCadastro('email')}
                                className={`${commonInputClassName} ${
                                    errorsCadastro.email
                                        ? errorRingClassName
                                        : ''
                                }`}
                            />
                            {errorsCadastro.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errorsCadastro.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="senha" className={labelClassName}>
                                Senha
                            </label>
                            <div className="relative">
                                <Input
                                    id="senha"
                                    type={mostrarSenha ? 'text' : 'password'}
                                    placeholder="Senha"
                                    {...registerCadastro('senha')}
                                    className={`${commonInputClassName} ${
                                        errorsCadastro.senha
                                            ? errorRingClassName
                                            : ''
                                    }`}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() =>
                                        setMostrarSenha(!mostrarSenha)
                                    }>
                                    {mostrarSenha ? (
                                        <EyeOff size={16} />
                                    ) : (
                                        <Eye size={16} />
                                    )}
                                </button>
                            </div>
                            {errorsCadastro.senha && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errorsCadastro.senha.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="cargo" className={labelClassName}>
                                Cargo
                            </label>
                            <Controller
                                name="cargo"
                                control={controlCadastro}
                                render={({ field }) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}>
                                        <SelectTrigger
                                            id="cargo"
                                            className={
                                                errorsCadastro.cargo
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : ''
                                            }>
                                            <SelectValue placeholder="Selecione o cargo" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-700 text-white border-gray-600">
                                            <SelectGroup>
                                                <SelectItem value="AGT">
                                                    Agente
                                                </SelectItem>
                                                <SelectItem value="ADM">
                                                    Administrador
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errorsCadastro.cargo && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errorsCadastro.cargo.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="microarea_id"
                                className={labelClassName}>
                                Microárea (opcional)
                            </label>
                            <Controller
                                name="microarea_id"
                                control={controlCadastro}
                                render={({ field }) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}>
                                        <SelectTrigger id="microarea_id">
                                            <SelectValue placeholder="Selecione a microárea" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-700 text-white border-gray-600">
                                            <SelectGroup>
                                                {watchEdicao('cargo') ===
                                                    'ADM' && (
                                                    <SelectItem value="null">
                                                        Nenhuma
                                                    </SelectItem>
                                                )}
                                                {microareas.map((microarea) => (
                                                    <SelectItem
                                                        key={microarea.id}
                                                        value={String(
                                                            microarea.id
                                                        )}>
                                                        {microarea.nome}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
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
                            Editar Agente
                        </DialogTitle>
                    </DialogHeader>

                    <form
                        onSubmit={handleSubmitEdicao(handleEditarAgente)}
                        className="space-y-4 py-4">
                        <div>
                            <label
                                htmlFor="nome-edicao"
                                className={labelClassName}>
                                Nome Completo
                            </label>
                            <Input
                                id="nome-edicao"
                                placeholder="Nome do agente"
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
                                htmlFor="email-edicao"
                                className={labelClassName}>
                                Email
                            </label>
                            <Input
                                id="email-edicao"
                                type="email"
                                placeholder="email@exemplo.com"
                                {...registerEdicao('email')}
                                className={`${commonInputClassName} ${
                                    errorsEdicao.email ? errorRingClassName : ''
                                }`}
                            />
                            {errorsEdicao.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errorsEdicao.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="senha-edicao"
                                className={labelClassName}>
                                Nova Senha (opcional)
                            </label>
                            <div className="relative">
                                <Input
                                    id="senha-edicao"
                                    type={mostrarSenha ? 'text' : 'password'}
                                    placeholder="Deixe em branco para manter a senha atual"
                                    {...registerEdicao('senha')}
                                    className={`${commonInputClassName} ${
                                        errorsEdicao.senha
                                            ? errorRingClassName
                                            : ''
                                    }`}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() =>
                                        setMostrarSenha(!mostrarSenha)
                                    }>
                                    {mostrarSenha ? (
                                        <EyeOff size={16} />
                                    ) : (
                                        <Eye size={16} />
                                    )}
                                </button>
                            </div>
                            {errorsEdicao.senha && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errorsEdicao.senha.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="cargo-edicao"
                                className={labelClassName}>
                                Cargo
                            </label>
                            <Controller
                                name="cargo"
                                control={controlEdicao}
                                render={({ field }) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}>
                                        <SelectTrigger
                                            id="cargo-edicao"
                                            className={
                                                errorsEdicao.cargo
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : ''
                                            }>
                                            <SelectValue placeholder="Selecione o cargo" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-700 text-white border-gray-600">
                                            <SelectGroup>
                                                <SelectItem value="AGT">
                                                    Agente
                                                </SelectItem>
                                                <SelectItem value="ADM">
                                                    Administrador
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errorsEdicao.cargo && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errorsEdicao.cargo.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="microarea_id-edicao"
                                className={labelClassName}>
                                Microárea (opcional)
                            </label>
                            <Controller
                                name="microarea_id"
                                control={controlEdicao}
                                render={({ field }) => (
                                    <Select
                                        value={field.value || 'null'}
                                        onValueChange={field.onChange}>
                                        <SelectTrigger id="microarea_id-edicao">
                                            <SelectValue placeholder="Selecione a microárea" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-700 text-white border-gray-600">
                                            <SelectGroup>
                                                {watchEdicao('cargo') ===
                                                    'ADM' && (
                                                    <SelectItem value="null">
                                                        Nenhuma
                                                    </SelectItem>
                                                )}
                                                {microareas.map((microarea) => (
                                                    <SelectItem
                                                        key={microarea.id}
                                                        value={String(
                                                            microarea.id
                                                        )}>
                                                        {microarea.nome}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
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
                        <p className="text-gray-700">
                            Tem certeza que deseja excluir o agente{' '}
                            <span className="font-semibold">
                                {agenteParaExcluir?.nome}
                            </span>
                            ?
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Esta ação não pode ser desfeita. Todas as tarefas
                            deste agente serão excluídas e os pacientes deste
                            agente ficarão sem agente atribuído.
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
                            onClick={handleExcluirAgente}
                            className="bg-red-600 hover:bg-red-700"
                            disabled={excluindo}>
                            {excluindo ? 'Excluindo...' : 'Excluir Agente'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
