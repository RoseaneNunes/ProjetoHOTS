const prisma = require('../lib/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.criarAgente = async (req, res) => {
    try {
        const { nome, email, senha, cargo, microarea_id } = req.body;

        // Criptografa a senha
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        // Cria o agente no banco de dados
        const novoAgente = await prisma.agente.create({
            data: {
                nome,
                email,
                senha: senhaCriptografada,
                cargo,
                microarea_id,
            },
        });

        res.status(201).json(novoAgente);
    } catch (error) {
        console.error(error); // É bom logar o erro completo
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
            return res
                .status(409)
                .json({ error: 'Este email já está em uso.' });
        }
        if (error.code === 'P2003') {
            // Erro de chave estrangeira (ex: microarea_id não existe)
            return res
                .status(400)
                .json({ error: 'A microárea especificada não existe.' });
        }
        res.status(500).json({ error: 'Erro ao criar agente.' });
    }
};

exports.listarAgentes = async (req, res) => {
    try {
        const agentes = await prisma.agente.findMany({
            include: {
                // Exemplo de como incluir a microárea relacionada
                microarea: true,
            },
        });
        res.json(agentes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar agentes.' });
    }
};

exports.obterAgentePorId = async (req, res) => {
    try {
        const agenteId = parseInt(req.params.id);
        if (isNaN(agenteId)) {
            return res.status(400).json({ error: 'ID do agente inválido.' });
        }
        const agente = await prisma.agente.findUnique({
            where: { id: agenteId },
            include: { microarea: true }, // Inclui a microárea
        });
        if (!agente) {
            return res.status(404).json({ error: 'Agente não encontrado.' });
        }
        res.json(agente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter agente.' });
    }
};

exports.atualizarAgente = async (req, res) => {
    try {
        const agenteId = parseInt(req.params.id);
        if (isNaN(agenteId)) {
            return res.status(400).json({ error: 'ID do agente inválido.' });
        }
        const dadosAtualizacao = req.body;

        if (dadosAtualizacao.senha) {
            dadosAtualizacao.senha = await bcrypt.hash(
                dadosAtualizacao.senha,
                10
            );
        }

        const agenteAtualizado = await prisma.agente.update({
            where: { id: agenteId },
            data: dadosAtualizacao,
        });
        res.json(agenteAtualizado);
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            // Registro para atualizar não encontrado
            return res
                .status(404)
                .json({ error: 'Agente não encontrado para atualização.' });
        }
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
            return res
                .status(409)
                .json({ error: 'Este email já está em uso por outro agente.' });
        }
        if (error.code === 'P2003') {
            return res.status(400).json({
                error: 'A microárea especificada para atualização não existe.',
            });
        }
        res.status(500).json({ error: 'Erro ao atualizar agente.' });
    }
};

exports.excluirAgente = async (req, res) => {
    try {
        const agenteId = parseInt(req.params.id);
        if (isNaN(agenteId)) {
            return res.status(400).json({ error: 'ID do agente inválido.' });
        }
        await prisma.agente.delete({
            where: { id: agenteId },
        });
        res.json({ message: 'Agente excluído com sucesso.' });
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            // Registro para deletar não encontrado
            return res
                .status(404)
                .json({ error: 'Agente não encontrado para exclusão.' });
        }
        res.status(500).json({ error: 'Erro ao excluir agente.' });
    }
};

exports.loginAgente = async (req, res) => {
    try {
        const { email, senha } = req.body;
        if (!email || !senha) {
            return res
                .status(400)
                .json({ error: 'Email e senha são obrigatórios.' });
        }

        const agente = await prisma.agente.findUnique({
            where: {
                email: email,
            },
        });

        if (!agente) {
            return res.status(401).json({ error: 'Email ou senha inválidos.' });
        }

        const senhaCorreta = await bcrypt.compare(senha, agente.senha);

        if (!senhaCorreta) {
            return res.status(401).json({ error: 'Email ou senha inválidos.' });
        }

        const { senha: _, ...agenteSemSenha } = agente;

        // O 'payload' do token pode conter informações que você queira acessar facilmente no frontend
        // ou em outras partes do backend sem precisar consultar o banco toda vez.
        // Não inclua informações sensíveis que não deveriam ser expostas.
        const payload = {
            id: agente.id,
            email: agente.email,
            cargo: agente.cargo, // Exemplo de informação adicional
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET, // Sua chave secreta do .env
            { expiresIn: '1h' } // Define o tempo de expiração do token (ex: 1 hora, 7d, etc.)
        );

        res.json({
            message: 'Login realizado com sucesso!',
            agente: agenteSemSenha,
            token: token, // Retorna o token para o cliente
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({
            error: 'Ocorreu um erro interno ao tentar fazer login.',
        });
    }
};
