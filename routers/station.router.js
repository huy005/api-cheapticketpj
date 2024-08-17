const express = require("express");
const { Station } = require("../models");
const {
  createStation,
  getAllStation,
  getSpecificStation,
  updateStation,
  deleteStaion,
} = require("../controllers/station.controller");
const { checkExist } = require("../middlewares/validation/existenceCheck");
const { authenticate } = require("../middlewares/auth/authentication");
const { authorize } = require("../middlewares/auth/authorization");
const stationRouter = express.Router();

stationRouter.post("/", authenticate, createStation);
stationRouter.get("/", authenticate, getAllStation);
stationRouter.get("/:id", authenticate, getSpecificStation);
stationRouter.put(
  "/:id",
  authenticate,
  authorize(["ADMIN", "CLIENT"]),
  checkExist(Station),
  updateStation
);
stationRouter.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  checkExist(Station),
  deleteStaion
);

module.exports = {
  stationRouter,
};
