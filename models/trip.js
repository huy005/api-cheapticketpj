"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Station, Ticket }) {
      this.belongsTo(Station, { foreignKey: "departure", as: "from" });
      this.belongsTo(Station, { foreignKey: "destination", as: "to" });
      this.hasMany(Ticket, { foreignKey: "trip_id" });
    }
  }
  Trip.init(
    {
      startingTime: DataTypes.DATE,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Trip",
    }
  );
  return Trip;
};
