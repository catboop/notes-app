const express = require("express");
const path = require("path");
const app = express();

const morgan = require("morgan");

const api = require("../controllers");

app.use(morgan("dev"));

app.use("/api", express.json(), express.urlencoded({ extended: true }), api);

app.use(express.static(path.join(__dirname, "../build")));


module.exports = app;
