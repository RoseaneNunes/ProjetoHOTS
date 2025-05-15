const express = require('express');
const router = express.Router();
const agenteController = require('../controllers/agenteController');
const { protegerRota } = require('../middleware/authMiddleware'); // Importar o middleware

router.post('/agentes', agenteController.criarAgente);
router.post('/agentes/login', agenteController.loginAgente);

router.get('/agentes', agenteController.listarAgentes);
router.get('/agentes/:id', agenteController.obterAgentePorId);
router.put('/agentes/:id',  agenteController.atualizarAgente);
router.delete('/agentes/:id',  agenteController.excluirAgente);

module.exports = router;
