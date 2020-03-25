'use strict';
module.exports = (sequelize, DataTypes) => {
  const RunningProject = sequelize.define('RunningProject', {
    ProjectId: DataTypes.INTEGER,
    StaffId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  RunningProject.associate = function(models) {
    // associations can be defined here
  };
  return RunningProject;
};