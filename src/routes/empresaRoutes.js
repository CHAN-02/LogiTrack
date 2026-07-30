const express = require('express');
const router = express.Router();
const { registrarEmpresa } = require('../controllers/empresaController');

router.post('/register', registrarEmpresa);

module.exports = router;