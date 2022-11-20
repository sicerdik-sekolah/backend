const express = require("express");
const router = express();
const { createCMSAkun } = require("./controller");

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.post("/akun", authenticateUser, createCMSAkun);
module.exports = router;
