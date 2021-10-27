'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.movie, {
        foreignKey: 'movieId'
      });
      this.belongsTo(models.user, {
        foreignKey: 'userId'
      });
    }
  };
  order.init({
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    rentDate: DataTypes.DATE,
    returnDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};