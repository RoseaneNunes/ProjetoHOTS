const prisma = require('../lib/prisma');

exports.criarPaciente = async (req, res) => {
    try {
        const { cpf, nome, endereco, comorbidades, situacao, microarea_id } =
            req.body;

        let agente_id = null;
        if (microarea_id) {
            const agenteDaMicroarea = await prisma.agente.findFirst({
                where: {
                    microarea_id: microarea_id,
                    cargo: 'AGT', // Garantir que é um agente, não um administrador
                },
            });

            if (agenteDaMicroarea) {
                agente_id = agenteDaMicroarea.id;
            }
        }

        const novoPaciente = await prisma.paciente.create({
            data: {
                cpf,
                nome,
                endereco,
                comorbidades,
                situacao,
                microarea_id,
                agente_id,
            },
        });

        res.status(201).json(novoPaciente);
    } catch (error) {
        console.error(error);
        if (error.code === 'P2002' && error.meta?.target?.includes('cpf')) {
            return res
                .status(409)
                .json({ error: 'Este CPF já está cadastrado.' });
        }
        if (error.code === 'P2003') {
            // Erro de chave estrangeira
            const field = error.meta?.field_name;
            if (field?.includes('agente_id')) {
                return res
                    .status(400)
                    .json({ error: 'O agente especificado não existe.' });
            }
            if (field?.includes('microarea_id')) {
                return res
                    .status(400)
                    .json({ error: 'A microárea especificada não existe.' });
            }
            return res
                .status(400)
                .json({ error: 'Erro de referência a outra tabela.' });
        }
        res.status(500).json({ error: 'Erro ao criar paciente.' });
    }
};

exports.listarPacientes = async (req, res) => {
    try {
        const pacientes = await prisma.paciente.findMany({
            include: {
                agente: true, // Inclui o agente relacionado
                microarea: true, // Inclui a microárea relacionada
            },
        });
        res.json(pacientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar pacientes.' });
    }
};

exports.obterPacientePorCPF = async (req, res) => {
    try {
        const { cpf } = req.params;
        const paciente = await prisma.paciente.findUnique({
            where: { cpf: cpf },
            include: {
                agente: true,
                microarea: true,
                tarefas: true, // Inclui as tarefas do paciente
            },
        });
        if (!paciente) {
            return res.status(404).json({ error: 'Paciente não encontrado.' });
        }
        res.json(paciente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter paciente.' });
    }
};

exports.atualizarPaciente = async (req, res) => {
    try {
        const { cpf } = req.params;
        const dadosAtualizacao = req.body;

        // Remover cpf dos dados de atualização para evitar erro, pois é a chave primária
        delete dadosAtualizacao.cpf;

        const pacienteAtualizado = await prisma.paciente.update({
            where: { cpf: cpf },
            data: dadosAtualizacao,
        });
        res.json(pacienteAtualizado);
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res
                .status(404)
                .json({ error: 'Paciente não encontrado para atualização.' });
        }
        if (error.code === 'P2003') {
            // Erro de chave estrangeira
            const field = error.meta?.field_name;
            if (field?.includes('agente_id')) {
                return res.status(400).json({
                    error: 'O agente especificado para atualização não existe.',
                });
            }
            if (field?.includes('microarea_id')) {
                return res.status(400).json({
                    error: 'A microárea especificada para atualização não existe.',
                });
            }
            return res.status(400).json({
                error: 'Erro de referência a outra tabela ao atualizar.',
            });
        }
        res.status(500).json({ error: 'Erro ao atualizar paciente.' });
    }
};

exports.excluirPaciente = async (req, res) => {
    try {
        const { cpf } = req.params;
        await prisma.paciente.delete({
            where: { cpf: cpf },
        });
        res.json({ message: 'Paciente excluído com sucesso.' });
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res
                .status(404)
                .json({ error: 'Paciente não encontrado para exclusão.' });
        }
        if (
            error.code === 'P2003' &&
            error.meta?.field_name?.includes('Tarefa_paciente_cpf_fkey')
        ) {
            return res.status(400).json({
                error: 'Não é possível excluir o paciente pois existem tarefas associadas a ele.',
            });
        }
        res.status(500).json({ error: 'Erro ao excluir paciente.' });
    }
};
