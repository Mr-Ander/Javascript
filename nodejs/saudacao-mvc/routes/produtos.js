const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Renderização de páginas estáticas relacionadas a produtos
router.get('/', produtosController.produtos);
router.get('/camisetas', produtosController.camisetas);
router.get('/cadastrar', produtosController.formcadproduto);
router.post('/cadastrar', produtosController.cadastro);

// Endpoints JSON (API) para produtos
router.get('/api', produtosController.listar);
router.get('/api/:id', produtosController.mostrar);
router.post('/api', produtosController.criar);
router.put('/api/:id', produtosController.atualizar);
router.delete('/api/:id', produtosController.deletar);

module.exports = router;