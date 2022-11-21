const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//Router
const superAdminRouter = require("./app/api/v1/superadmin/router");
const akunRouter = require("./app/api/v1/akun/router");
const authRouter = require("./app/api/v1/auth/router");
const laporanRouter = require("./app/api/v1/laporan/router");
const v1 = "/api/v1/cms";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome Server Sicerdik API",
  });
});

app.use(v1, superAdminRouter);
app.use(v1, akunRouter);
app.use(v1, authRouter);
app.use(v1, laporanRouter);
module.exports = app;
