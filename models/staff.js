'use strict';
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define('Staff', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    passw: DataTypes.STRING
  }, {});
  Staff.associate = function(models) {
    // associations can be defined here
  };
  return Staff;
};