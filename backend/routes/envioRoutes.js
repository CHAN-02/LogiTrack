const express = require('express');
const router = express.Router();
const { crearEnvio } = require('../controllers/envioController');

router.post('/', crearEnvio);

module.exports = router;