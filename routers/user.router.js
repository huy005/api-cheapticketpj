const express = require("express");
const {
  register,
  login,
  uploadAvatar,
  getAllTrip,
} = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/auth/authentication");
const { uploadImage } = require("../middlewares/upload/upload-image");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post(
  "/upload-file",
  authenticate,
  uploadImage("avatar"),
  uploadAvatar
);
userRouter.get("/all-trip", authenticate, getAllTrip);

module.exports = {
  userRouter,
};
