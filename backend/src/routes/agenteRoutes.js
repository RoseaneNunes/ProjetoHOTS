const express = require('express');
const router = express.Router();
const agenteController = require('../controllers/agenteController');

router.post('/agentes', agenteController.criarAgente);
router.get('/agentes', agenteController.listarAgentes);
router.get('/agentes/:id', agenteController.obterAgentePorId);
router.put('/agentes/:id', agenteController.atualizarAgente);
router.delete('/agentes/:id', agenteController.excluirAgente);

module.exports = router;
