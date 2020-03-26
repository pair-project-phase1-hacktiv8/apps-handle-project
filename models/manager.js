'use strict';
module.exports = (sequelize, DataTypes) => {
  

class Manager extends sequelize.Sequelize.Model{}

Manager.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  username: DataTypes.STRING,
  passw: DataTypes.STRING
},{
  sequelize,
  modelName:"Manager"

})

  Manager.associate = function(models) {
    // associations can be defined here
    
    Manager.hasMany(models.Project)
  };
  return Manager;
};