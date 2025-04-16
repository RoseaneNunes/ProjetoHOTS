const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const agenteRoutes = require('./routes/agenteRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');
const microareaRoutes = require('./routes/microareaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', agenteRoutes);
app.use('/api', pacienteRoutes);
app.use('/api', tarefaRoutes);
app.use('/api', microareaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}!`);
});

const db = require('./models');

const criarMicroareaPadrao = async () => {
    try {
        const microareaPadrao = await db.Microarea.findOne({
            where: { nome: 'Microárea Padrão' },
        });

        if (!microareaPadrao) {
            await db.Microarea.create({
                nome: 'Microárea Padrão',
                descricao: 'Microárea criada automaticamente para uso inicial.',
            });
            console.log('Microárea padrão criada com sucesso.');
        } else {
            console.log('Microárea padrão já existe.');
        }
    } catch (error) {
        console.error('Erro ao criar microárea padrão:', error);
    }
};

db.sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado.');
    criarMicroareaPadrao();
});
