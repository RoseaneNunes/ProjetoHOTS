const { Tarefa } = require('../models');

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

        // Cria a tarefa no banco de dados
        const novaTarefa = await Tarefa.create({
            titulo,
            descricao,
            status,
            prioridade,
            data_limite,
            tipo,
            agente_id,
            paciente_cpf,
        });

        res.status(201).json(novaTarefa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar tarefa.' });
    }
};

exports.listarTarefas = async (req, res) => {
    try {
        const tarefas = await Tarefa.findAll();
        res.json(tarefas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar tarefas.' });
    }
};

exports.obterTarefaPorId = async (req, res) => {
    try {
        const tarefa = await Tarefa.findByPk(req.params.id);
        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        }
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter tarefa.' });
    }
};

exports.atualizarTarefa = async (req, res) => {
    try {
        const tarefa = await Tarefa.findByPk(req.params.id);
        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        }

        // Atualiza os campos da tarefa
        await tarefa.update(req.body);
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa.' });
    }
};

exports.excluirTarefa = async (req, res) => {
    try {
        const tarefa = await Tarefa.findByPk(req.params.id);
        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        }

        await tarefa.destroy();
        res.json({ message: 'Tarefa excluída com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir tarefa.' });
    }
};
