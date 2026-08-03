'use strict';

const { Customer } = require('../models');

const createCustomer = async (req, res) => {
  try {

    const customer = await Customer.create(req.body);

    return res.status(201).json({
      message: 'Cliente creado correctamente',
      customer
    });

  } catch (error) {

    return res.status(500).json({
      message: 'Error al crear cliente',
      error: error.message
    });

  }
};

const getCustomers = async (req, res) => {
  try {

    const customers = await Customer.findAll();

    return res.status(200).json({
      customers
    });

  } catch (error) {

    return res.status(500).json({
      message: 'Error al obtener clientes',
      error: error.message
    });

  }
};

module.exports = {
  createCustomer,
  getCustomers
};