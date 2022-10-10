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
    user_name: DataTypes.STRING,
    user_birth: DataTypes.STRING,
    user_artistname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};