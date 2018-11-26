'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    title: DataTypes.STRING
  }, {});
  return Student;
};