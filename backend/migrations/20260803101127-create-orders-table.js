'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('orders', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },

  tenant_id: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'tenants',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },

  customer_id: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'customers',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },

  driver_id: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: 'drivers',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  delivery_address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },

  status: {
    type: Sequelize.ENUM(
      'pendiente',
      'asignado',
      'en_ruta',
      'entregado',
      'cancelado'
    ),
    allowNull: false,
    defaultValue: 'pendiente'
  },

  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },

  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('orders');
await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_orders_status";');
  }
};
