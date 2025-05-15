const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const { protegerRota } = require('../middleware/authMiddleware');

router.post('/pacientes',  pacienteController.criarPaciente);
router.get('/pacientes',  pacienteController.listarPacientes);
router.get(
    '/pacientes/:cpf',
    protegerRota,
    pacienteController.obterPacientePorCPF
);
router.put(
    '/pacientes/:cpf',
    protegerRota,
    pacienteController.atualizarPaciente
);
router.delete(
    '/pacientes/:cpf',
    protegerRota,
    pacienteController.excluirPaciente
);

module.exports = router;
