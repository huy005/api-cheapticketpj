const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers/");
const Fingerprint = require("express-fingerprint");
const app = express();

app.use(Fingerprint());
app.use(express.json());

const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));
app.use("/api/v1", rootRouter);

app.listen(3000, async () => {
  console.log("app listening on http://localhost:3000");
  try {
    await sequelize.authenticate();
    console.log("connection has been established successfully./");
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
});
