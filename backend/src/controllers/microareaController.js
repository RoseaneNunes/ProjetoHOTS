const prisma = require('../lib/prisma');

exports.criarMicroarea = async (req, res) => {
    try {
        const { nome, descricao } = req.body;

        const novaMicroarea = await prisma.microarea.create({
            data: {
                nome,
                descricao,
            },
        });
        res.status(201).json(novaMicroarea);
    } catch (error) {
        console.error(error);
        if (error.code === 'P2002' && error.meta?.target?.includes('nome')) {
            // Supondo que nome seja único, ajuste se não for
            return res
                .status(409)
                .json({ error: 'Já existe uma microárea com este nome.' });
        }
        res.status(500).json({ error: 'Erro ao criar microárea.' });
    }
};

exports.listarMicroareas = async (req, res) => {
    try {
        const microareas = await prisma.microarea.findMany({
            include: {
                agentes: false, // Defina como true se quiser incluir os agentes
                pacientes: false, // Defina como true se quiser incluir os pacientes
            },
        });
        res.json(microareas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar microáreas.' });
    }
};

exports.obterMicroareaPorId = async (req, res) => {
    try {
        const microareaId = parseInt(req.params.id);
        if (isNaN(microareaId)) {
            return res.status(400).json({ error: 'ID da microárea inválido.' });
        }
        const microarea = await prisma.microarea.findUnique({
            where: { id: microareaId },
            include: {
                agentes: true, // Inclui os agentes da microárea
                pacientes: true, // Inclui os pacientes da microárea
            },
        });
        if (!microarea) {
            return res.status(404).json({ error: 'Microárea não encontrada.' });
        }
        res.json(microarea);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter microárea.' });
    }
};

exports.atualizarMicroarea = async (req, res) => {
    try {
        const microareaId = parseInt(req.params.id);
        if (isNaN(microareaId)) {
            return res.status(400).json({ error: 'ID da microárea inválido.' });
        }
        const { nome, descricao } = req.body;

        const microareaAtualizada = await prisma.microarea.update({
            where: { id: microareaId },
            data: {
                nome,
                descricao,
            },
        });
        res.json(microareaAtualizada);
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res
                .status(404)
                .json({ error: 'Microárea não encontrada para atualização.' });
        }
        if (error.code === 'P2002' && error.meta?.target?.includes('nome')) {
            return res
                .status(409)
                .json({ error: 'Já existe outra microárea com este nome.' });
        }
        res.status(500).json({ error: 'Erro ao atualizar microárea.' });
    }
};

exports.excluirMicroarea = async (req, res) => {
    try {
        const microareaId = parseInt(req.params.id);
        if (isNaN(microareaId)) {
            return res.status(400).json({ error: 'ID da microárea inválido.' });
        }
        await prisma.microarea.delete({
            where: { id: microareaId },
        });
        res.json({ message: 'Microárea excluída com sucesso.' });
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res
                .status(404)
                .json({ error: 'Microárea não encontrada para exclusão.' });
        }
        // P2003 pode ocorrer se houver agentes ou pacientes referenciando esta microárea
        // e o onDelete não for CASCADE (no caso de Agente.microarea_id é SET NULL, então não bloquearia)
        // (no caso de Paciente.microarea_id é SET NULL, então não bloquearia)
        if (error.code === 'P2003') {
            return res
                .status(400)
                .json({
                    error: 'Não é possível excluir a microárea pois existem registros associados a ela que impedem a exclusão (verifique agentes ou pacientes).',
                });
        }
        res.status(500).json({ error: 'Erro ao excluir microárea.' });
    }
};
