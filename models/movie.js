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
      this.belongsTo(models.order, {
        foreignKey: 'orderId'
      });
    }
  };
  movie.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    cast: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};