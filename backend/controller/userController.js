'use strict';

const { User } = require('../models');

const createUser = async (req, res) => {
  try {

    const user = await User.create(req.body);

    return res.status(201).json({
      message: 'Usuario creado correctamente',
      user
    });

  } catch (error) {

    return res.status(500).json({
      message: 'Error al crear usuario',
      error: error.message
    });

  }
};

const getUsers = async (req, res) => {
  try {

    const users = await User.findAll();

    return res.status(200).json({
      users
    });

  } catch (error) {

    return res.status(500).json({
      message: 'Error al obtener usuarios',
      error: error.message
    });

  }
};

module.exports = {
  createUser,
  getUsers
};