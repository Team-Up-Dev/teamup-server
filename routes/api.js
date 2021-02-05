const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) =>
  res
    .json([
      {
        desc: "Get All Contributors data",
        to: "/api/all",
      },
    ])
    .status(200)
);

module.exports = Router;
