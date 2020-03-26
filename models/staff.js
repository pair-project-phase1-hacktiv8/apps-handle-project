'use strict';
module.exports = (sequelize, DataTypes) => {
  

class Staff extends sequelize.Sequelize.Model {}

Staff.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  username: DataTypes.STRING,
  passw: DataTypes.STRING,
  score: DataTypes.DOUBLE
},{
sequelize,
modelName : "Staff"
})

  Staff.associate = function(models) {
    // associations can be defined here
    Staff.hasMany(models.RunningProject)
  };
  return Staff;
};