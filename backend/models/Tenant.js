'use strict';

module.exports = (sequelize, DataTypes) => {

  const Tenant = sequelize.define('Tenant', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },

    address: {
      type: DataTypes.STRING,
      allowNull: true
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }

  }, {

    tableName: 'tenants',
    timestamps: true

  });


  Tenant.associate = function(models) {

    Tenant.hasMany(models.User, {
      foreignKey: 'tenant_id',
      as: 'users'
    });

  };


  return Tenant;
};