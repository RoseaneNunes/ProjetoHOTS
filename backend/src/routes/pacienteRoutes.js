const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.post('/pacientes', pacienteController.criarPaciente);
router.get('/pacientes', pacienteController.listarPacientes);
router.get('/pacientes/:cpf', pacienteController.obterPacientePorCPF);
router.put('/pacientes/:cpf', pacienteController.atualizarPaciente);
router.delete('/pacientes/:cpf', pacienteController.excluirPaciente);

module.exports = router;
