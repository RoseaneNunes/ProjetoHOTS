const { Agente } = require('../models');
const bcrypt = require('bcryptjs');

exports.criarAgente = async (req, res) => {
    try {
        const { nome, email, senha, cargo, microarea_id } = req.body;

        // Criptografa a senha
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        // Cria o agente no banco de dados
        const novoAgente = await Agente.create({
            nome,
            email,
            senha: senhaCriptografada,
            cargo,
            microarea_id,
        });

        res.status(201).json(novoAgente);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao criar agente.' });
    }
};

exports.listarAgentes = async (req, res) => {
    try {
        const agentes = await Agente.findAll();
        res.json(agentes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar agentes.' });
    }
};

exports.obterAgentePorId = async (req, res) => {
    try {
        const agente = await Agente.findByPk(req.params.id);
        if (!agente) {
            return res.status(404).json({ error: 'Agente não encontrado.' });
        }
        res.json(agente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter agente.' });
    }
};

exports.atualizarAgente = async (req, res) => {
    try {
        const agente = await Agente.findByPk(req.params.id);
        if (!agente) {
            return res.status(404).json({ error: 'Agente não encontrado.' });
        }

        // Atualiza os campos do agente
        await agente.update(req.body);
        res.json(agente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar agente.' });
    }
};

exports.excluirAgente = async (req, res) => {
    try {
        const agente = await Agente.findByPk(req.params.id);
        if (!agente) {
            return res.status(404).json({ error: 'Agente não encontrado.' });
        }

        await agente.destroy();
        res.json({ message: 'Agente excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir agente.' });
    }
};
