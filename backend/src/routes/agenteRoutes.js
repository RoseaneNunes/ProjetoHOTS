const express = require('express');
const router = express.Router();
const agenteController = require('../controllers/agenteController');
const { protegerRota } = require('../middleware/authMiddleware'); // Importar o middleware

router.post('/agentes', agenteController.criarAgente);
router.post('/agentes/login', agenteController.loginAgente);

router.get('/agentes', protegerRota, agenteController.listarAgentes);
router.get('/agentes/:id', protegerRota, agenteController.obterAgentePorId);
router.put('/agentes/:id', protegerRota, agenteController.atualizarAgente);
router.delete('/agentes/:id', protegerRota, agenteController.excluirAgente);

module.exports = router;
