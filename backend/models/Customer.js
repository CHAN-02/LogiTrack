'use strict';

module.exports = (sequelize, DataTypes) => {

  const Customer = sequelize.define('Customer', {

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

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },

    address: {
      type: DataTypes.STRING,
      allowNull: true
    }

  }, {
    tableName: 'customers',
    timestamps: true
  });


  Customer.associate = (models) => {

    Customer.belongsTo(models.Tenant, {
      foreignKey: 'tenant_id'
    });

  };


  return Customer;

};