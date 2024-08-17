const express = require("express");

const fingerPrintRouter = express.Router();

fingerPrintRouter.get("/", (req, res) => {
  console.log(req.fingerprint);
  res.send(req.fingerprint);
});

module.exports = {
  fingerPrintRouter,
};
