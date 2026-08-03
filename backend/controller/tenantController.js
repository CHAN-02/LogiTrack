'use strict';

const { Tenant } = require('../models');


const createTenant = async (req, res) => {

  try {

    const tenant = await Tenant.create(req.body);

    return res.status(201).json({
      message: 'Tenant creado correctamente',
      tenant
    });

  } catch (error) {

    return res.status(500).json({
      message: 'Error al crear tenant',
      error: error.message
    });

  }

};


const getTenants = async (req, res) => {

  try {

    const tenants = await Tenant.findAll();

    return res.status(200).json({
      tenants
    });

  } catch (error) {

    return res.status(500).json({
      message: 'Error al obtener tenants',
      error: error.message
    });

  }

};


module.exports = {
  createTenant,
  getTenants
};