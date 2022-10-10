'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Art extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Art, Trade, User } = models;

      Art.belongsTo(User, {
        foreignKey: "art_user_id",
        onDelete: "CASCADE",
      });

      Art.hasMany(Trade, {
        foreignKey: "trade_art_id",
      });
    }
  }
  Art.init({
    art_name: DataTypes.STRING,
    art_size: DataTypes.STRING,
    art_genre: DataTypes.STRING,
    art_image: DataTypes.STRING,
    art_desc: DataTypes.TEXT,
    art_price: DataTypes.INTEGER,
    art_owner: DataTypes.STRING,
    art_artist: DataTypes.STRING,
    art_state: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Art',
  });
  return Art;
};