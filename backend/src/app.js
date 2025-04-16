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
db.sequelize.sync({ force: true }).then(() => {
    console.log('Banco de dados sincronizado');
});
