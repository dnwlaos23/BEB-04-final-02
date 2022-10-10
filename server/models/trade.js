'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trade extends Model {

    static associate(models) {

      const { Art, Trade } = models;
      Trade.belongsTo(Art, {
        foreignKey: "trade_art_id",
        onDelete: "CASCADE",
      });
    }
  }
  Trade.init({
    trade_user_id: DataTypes.STRING,
    trade_state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trade',
  });
  return Trade;
};