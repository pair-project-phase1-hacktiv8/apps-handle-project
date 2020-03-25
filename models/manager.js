'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manager = sequelize.define('Manager', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    passw: DataTypes.STRING
  }, {});
  Manager.associate = function(models) {
    // associations can be defined here
  };
  return Manager;
};