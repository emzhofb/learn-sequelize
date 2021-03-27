'use strict';
const {
  Model
} = require('sequelize');
const { Skill } = require('../models');
module.exports = (sequelize, DataTypes) => {
  class Chara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Chara.belongsTo(Skill, { foreignKey: 'element_id' });
    }
  };
  Chara.init({
    name: DataTypes.STRING,
    element_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chara',
  });
  return Chara;
};