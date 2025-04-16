const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/tarefas', tarefaController.criarTarefa);
router.get('/tarefas', tarefaController.listarTarefas);
router.get('/tarefas/:id', tarefaController.obterTarefaPorId);
router.put('/tarefas/:id', tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', tarefaController.excluirTarefa);

module.exports = router;
