'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { User, Art } = models;
      User.hasMany(Art, {
        foreignKey: "art_user_id",
      });
    }
  }
  User.init({
    user_id: DataTypes.STRING,
    user_pass: DataTypes.STRING,
    user_artistname: DataTypes.STRING,
    user_address: DataTypes.STRING,
    user_privateKey: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};