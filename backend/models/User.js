'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

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

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'admin'
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }


  }, {

    tableName: 'users',
    timestamps: true

  });


  User.associate = function(models) {

    User.belongsTo(models.Tenant, {
      foreignKey: 'tenant_id',
      as: 'tenant'
    });

  };


  return User;
};