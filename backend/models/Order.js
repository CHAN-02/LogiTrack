'use strict';

module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define('Order', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    tenant_id: {
      type: DataTypes.UUID,
      allowNull: false
    },

    customer_id: {
      type: DataTypes.UUID,
      allowNull: false
    },

    driver_id: {
      type: DataTypes.UUID,
      allowNull: true
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendiente'
    },

    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },

    delivery_address: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    tableName: 'orders',
    timestamps: true
  });


  Order.associate = (models) => {

    Order.belongsTo(models.Tenant, {
      foreignKey: 'tenant_id'
    });

    Order.belongsTo(models.Customer, {
      foreignKey: 'customer_id'
    });

    Order.belongsTo(models.Driver, {
      foreignKey: 'driver_id'
    });

  };


  return Order;

};