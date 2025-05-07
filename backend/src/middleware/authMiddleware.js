const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const protegerRota = (req, res, next) => {
    let token;

    // 1. Verificar se o token está no cabeçalho Authorization
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // 2. Extrair o token (formato: "Bearer SEU_TOKEN_AQUI")
            token = req.headers.authorization.split(' ')[1];

            // 3. Verificar e decodificar o token
            const decodificado = jwt.verify(token, process.env.JWT_SECRET);

            // 4. Adicionar os dados do usuário (payload do token) ao objeto req
            // Assim, as próximas funções no ciclo da requisição terão acesso a req.agente
            // Você pode buscar o agente no banco aqui se precisar de dados mais atualizados,
            // mas para muitas operações, o payload do token é suficiente.
            req.agente = {
                id: decodificado.id,
                email: decodificado.email,
                cargo: decodificado.cargo,
            }; // Ou buscar do banco: req.agente = await prisma.agente.findUnique({ where: { id: decodificado.id } });

            next(); // Passa para a próxima função/middleware no ciclo da requisição
        } catch (error) {
            console.error('Erro na autenticação do token:', error.message);
            if (error.name === 'TokenExpiredError') {
                return res
                    .status(401)
                    .json({ error: 'Token expirado. Faça login novamente.' });
            }
            return res
                .status(401)
                .json({ error: 'Não autorizado, token inválido.' });
        }
    }

    if (!token) {
        return res
            .status(401)
            .json({ error: 'Não autorizado, token não fornecido.' });
    }
};

module.exports = { protegerRota };
