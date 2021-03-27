'use strict';
const {
  Model
} = require('sequelize');
const { Chara } = require('../models');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Skill.hasMany(Chara, { foreignKey: 'element_id' });
    }
  };
  Skill.init({
    element: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};