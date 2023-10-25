"use strict";
const { encryptpass } = require("../helpers/bcrypt.js");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username tidak boleh kosong!",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email tidak boleh kosong!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password tidak boleh kosong!",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Gambar tidak boleh kosong!",
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Usia tidak boleh kosong!",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (user, options) {
          user.password = encryptpass(user.password);
          user.image =
            user.image || "https://cdn-icons-png.flaticon.com/512/21/21104.png";
          user.age = user.age || 0;
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
