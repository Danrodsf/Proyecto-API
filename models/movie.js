'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movie.belongsTo(models.order, {
        foreignKey: 'orderId'
      });
    }
  };
  movie.init({
    title: DataTypes.STRING,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};