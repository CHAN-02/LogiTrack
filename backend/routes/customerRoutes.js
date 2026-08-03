'use strict';

const express = require('express');
const router = express.Router();

const {
  createCustomer,
  getCustomers
} = require('../controller/customerController');

router.post('/', createCustomer);
router.get('/', getCustomers);

module.exports = router;
