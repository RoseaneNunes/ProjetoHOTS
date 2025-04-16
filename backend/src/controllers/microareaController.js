const { Microarea } = require('../models');

exports.criarMicroarea = async (req, res) => {
    try {
        const { nome, descricao } = req.body;

        // Cria a microárea no banco de dados
        const novaMicroarea = await Microarea.create({
            nome,
            descricao,
        });

        res.status(201).json(novaMicroarea);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar microárea.' });
    }
};

exports.listarMicroareas = async (req, res) => {
    try {
        const microareas = await Microarea.findAll();
        res.json(microareas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar microáreas.' });
    }
};

exports.obterMicroareaPorId = async (req, res) => {
    try {
        const microarea = await Microarea.findByPk(req.params.id);
        if (!microarea) {
            return res.status(404).json({ error: 'Microárea não encontrada.' });
        }
        res.json(microarea);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter microárea.' });
    }
};

exports.atualizarMicroarea = async (req, res) => {
    try {
        const microarea = await Microarea.findByPk(req.params.id);
        if (!microarea) {
            return res.status(404).json({ error: 'Microárea não encontrada.' });
        }

        // Atualiza os campos da microárea
        await microarea.update(req.body);
        res.json(microarea);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar microárea.' });
    }
};

exports.excluirMicroarea = async (req, res) => {
    try {
        const microarea = await Microarea.findByPk(req.params.id);
        if (!microarea) {
            return res.status(404).json({ error: 'Microárea não encontrada.' });
        }

        await microarea.destroy();
        res.json({ message: 'Microárea excluída com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir microárea.' });
    }
};
