'use strict';

const express = require('express');
const router = express.Router();

const {
  createTenant,
  getTenants
} = require('../controller/tenantController');


// Crear tenant
router.post('/', createTenant);


// Obtener tenants
router.get('/', getTenants);


module.exports = router;