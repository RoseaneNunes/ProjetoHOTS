const { Paciente } = require('../models');

exports.criarPaciente = async (req, res) => {
    try {
        const {
            cpf,
            nome,
            endereco,
            comorbidades,
            situacao,
            agente_id,
            microarea_id,
        } = req.body;

        // Cria o paciente no banco de dados
        const novoPaciente = await Paciente.create({
            cpf,
            nome,
            endereco,
            comorbidades,
            situacao,
            agente_id,
            microarea_id,
        });

        res.status(201).json(novoPaciente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar paciente.' });
    }
};

exports.listarPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar pacientes.' });
    }
};

exports.obterPacientePorCPF = async (req, res) => {
    try {
        const paciente = await Paciente.findOne({
            where: { cpf: req.params.cpf },
        });
        if (!paciente) {
            return res.status(404).json({ error: 'Paciente não encontrado.' });
        }
        res.json(paciente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter paciente.' });
    }
};

exports.atualizarPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findOne({
            where: { cpf: req.params.cpf },
        });
        if (!paciente) {
            return res.status(404).json({ error: 'Paciente não encontrado.' });
        }

        // Atualiza os campos do paciente
        await paciente.update(req.body);
        res.json(paciente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar paciente.' });
    }
};

exports.excluirPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findOne({
            where: { cpf: req.params.cpf },
        });
        if (!paciente) {
            return res.status(404).json({ error: 'Paciente não encontrado.' });
        }

        await paciente.destroy();
        res.json({ message: 'Paciente excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir paciente.' });
    }
};
