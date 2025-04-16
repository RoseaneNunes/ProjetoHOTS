const express = require('express');
const router = express.Router();
const microareaController = require('../controllers/microareaController');

router.post('/microareas', microareaController.criarMicroarea);
router.get('/microareas', microareaController.listarMicroareas);
router.get('/microareas/:id', microareaController.obterMicroareaPorId);
router.put('/microareas/:id', microareaController.atualizarMicroarea);
router.delete('/microareas/:id', microareaController.excluirMicroarea);

module.exports = router;
