const prisma = require('../lib/prisma');

exports.criarTarefa = async (req, res) => {
    try {
        const {
            titulo,
            descricao,
            status,
            prioridade,
            data_limite,
            tipo,
            agente_id,
            paciente_cpf,
        } = req.body;

        const novaTarefa = await prisma.tarefa.create({
            data: {
                titulo,
                descricao,
                status: status || 'pendente', // Valor padrão se não fornecido
                prioridade: prioridade || 'media', // Valor padrão se não fornecido
                data_limite: data_limite ? new Date(data_limite) : null,
                tipo,
                agente_id,
                paciente_cpf,
            },
        });
        res.status(201).json(novaTarefa);
    } catch (error) {
        console.error(error);
        if (error.code === 'P2003') {
            // Erro de chave estrangeira
            const field = error.meta?.field_name;
            if (field?.includes('agente_id')) {
                return res.status(400).json({
                    error: 'O agente especificado para a tarefa não existe.',
                });
            }
            if (field?.includes('paciente_cpf')) {
                return res.status(400).json({
                    error: 'O paciente especificado para a tarefa não existe.',
                });
            }
            return res.status(400).json({
                error: 'Erro de referência a outra tabela ao criar tarefa.',
            });
        }
        res.status(500).json({ error: 'Erro ao criar tarefa.' });
    }
};

exports.listarTarefas = async (req, res) => {
    try {
        const tarefas = await prisma.tarefa.findMany({
            include: {
                agente: true,
                paciente: true,
            },
            orderBy: {
                data_criacao: 'desc',
            },
        });
        res.json(tarefas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar tarefas.' });
    }
};

exports.obterTarefaPorId = async (req, res) => {
    try {
        const tarefaId = parseInt(req.params.id);
        if (isNaN(tarefaId)) {
            return res.status(400).json({ error: 'ID da tarefa inválido.' });
        }
        const tarefa = await prisma.tarefa.findUnique({
            where: { id: tarefaId },
            include: {
                agente: true,
                paciente: true,
            },
        });
        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        }
        res.json(tarefa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter tarefa.' });
    }
};

exports.atualizarTarefa = async (req, res) => {
    try {
        const tarefaId = parseInt(req.params.id);
        if (isNaN(tarefaId)) {
            return res.status(400).json({ error: 'ID da tarefa inválido.' });
        }
        const dadosAtualizacao = req.body;

        // Converter datas se fornecidas
        if (dadosAtualizacao.data_limite) {
            dadosAtualizacao.data_limite = new Date(
                dadosAtualizacao.data_limite
            );
        }
        if (dadosAtualizacao.data_conclusao) {
            dadosAtualizacao.data_conclusao = new Date(
                dadosAtualizacao.data_conclusao
            );
        }
        // Remover id dos dados de atualização para evitar erro
        delete dadosAtualizacao.id;
        // Remover data_criacao para não ser alterada
        delete dadosAtualizacao.data_criacao;

        const tarefaAtualizada = await prisma.tarefa.update({
            where: { id: tarefaId },
            data: dadosAtualizacao,
        });
        res.json(tarefaAtualizada);
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res
                .status(404)
                .json({ error: 'Tarefa não encontrada para atualização.' });
        }
        if (error.code === 'P2003') {
            // Erro de chave estrangeira
            const field = error.meta?.field_name;
            if (field?.includes('agente_id')) {
                return res.status(400).json({
                    error: 'O agente especificado para atualização da tarefa não existe.',
                });
            }
            if (field?.includes('paciente_cpf')) {
                return res.status(400).json({
                    error: 'O paciente especificado para atualização da tarefa não existe.',
                });
            }
            return res.status(400).json({
                error: 'Erro de referência a outra tabela ao atualizar tarefa.',
            });
        }
        res.status(500).json({ error: 'Erro ao atualizar tarefa.' });
    }
};

exports.excluirTarefa = async (req, res) => {
    try {
        const tarefaId = parseInt(req.params.id);
        if (isNaN(tarefaId)) {
            return res.status(400).json({ error: 'ID da tarefa inválido.' });
        }
        await prisma.tarefa.delete({
            where: { id: tarefaId },
        });
        res.json({ message: 'Tarefa excluída com sucesso.' });
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res
                .status(404)
                .json({ error: 'Tarefa não encontrada para exclusão.' });
        }
        res.status(500).json({ error: 'Erro ao excluir tarefa.' });
    }
};
