const express = require("express");
const { Trip } = require("../models");
const {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
} = require("../controllers/trip.controller");
const { checkExist } = require("../middlewares/validation/existenceCheck");
const { authenticate } = require("../middlewares/auth/authentication");
const { authorize } = require("../middlewares/auth/authorization");
const tripRouter = express.Router();

tripRouter.post("/", authenticate, createTrip);
tripRouter.get("/", authenticate, getAllTrip);
tripRouter.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  checkExist(Trip),
  deleteTrip
);
tripRouter.put(
  "/:id",
  authenticate,
  authorize(["ADMIN", "CLIENT"]),
  checkExist(Trip),
  updateTrip
);

module.exports = {
  tripRouter,
};
