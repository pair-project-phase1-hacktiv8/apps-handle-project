'use strict';
module.exports = (sequelize, DataTypes) => {
  

class Project extends sequelize.Sequelize.Model{}

Project.init({
  projectname: DataTypes.STRING,
  projecttime: DataTypes.INTEGER,
  ManagerId: DataTypes.INTEGER,
  status:DataTypes.BOOLEAN,
  score:DataTypes.INTEGER
},{
 sequelize,
 modelName:"Project"
})


  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.Manager)
    Project.hasMany(models.RunningProject)
  };
  return Project;
};