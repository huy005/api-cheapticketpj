"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip }) {
      this.hasMany(Trip, { foreignKey: "departure", as: "from" });
      this.hasMany(Trip, { foreignKey: "destination", as: "to" });
    }
  }
  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 30],
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          checkLen(value) {
            if (value.length >= 5 && value.length <= 20) {
              return true;
            } else {
              throw new Error("5~20文字以内です。");
            }
          },
        },
      },
      place: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Station",
    }
  );
  return Station;
};
