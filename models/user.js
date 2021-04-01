"use strict";
const { Model } = require("sequelize");
const { isAfter } = require("date-fns");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        field: 'first_name',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        field: 'password_hash',
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      isMale: {
        field: 'is_male',
        type: DataTypes.BOOLEAN,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isCorrectDate(value){
            const date = new Date(value)
            if(isAfter(date, new Date())){
              throw new Error('Enter a valid date');
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
    }
  );
  return User;
};
