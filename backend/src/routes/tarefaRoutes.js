const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');
const { protegerRota } = require('../middleware/authMiddleware');

router.post('/tarefas', protegerRota, tarefaController.criarTarefa);
router.get('/tarefas', protegerRota, tarefaController.listarTarefas);
router.get('/tarefas/:id', protegerRota, tarefaController.obterTarefaPorId);
router.put('/tarefas/:id', protegerRota, tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', protegerRota, tarefaController.excluirTarefa);

module.exports = router;
