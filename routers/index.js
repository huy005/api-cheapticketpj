const express = require("express");
const { stationRouter } = require("./station.router");
const { userRouter } = require("./user.router");
const { tripRouter } = require("./trip.router");
const { fingerPrintRouter } = require("./finger-print");
const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouter);
rootRouter.use("/finger-print", fingerPrintRouter);

module.exports = {
  rootRouter,
};
