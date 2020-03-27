'use strict';
module.exports = (sequelize, DataTypes) => {
  

  class RunningProject extends sequelize.Sequelize.Model{}

  RunningProject.init({
    ProjectId: DataTypes.INTEGER,
    StaffId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  },{
    sequelize,
    modelName:"RunningProject"
  })
  RunningProject.associate = function(models) {
    // associations can be defined here
    RunningProject.belongsTo(models.Project)
    RunningProject.belongsTo(models.Staff)
  };
  return RunningProject;
};