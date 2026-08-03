'use strict';

module.exports = (sequelize, DataTypes) => {

  const Driver = sequelize.define('Driver', {

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

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  }, {
    tableName: 'drivers',
    timestamps: true
  });


  Driver.associate = (models) => {

    Driver.belongsTo(models.Tenant, {
      foreignKey: 'tenant_id'
    });

  };


  return Driver;

};