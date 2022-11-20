const express = require("express");
const router = express();
const { createCMSSuperadmin } = require("./controller");



router.post("/superadmin", createCMSSuperadmin);
module.exports = router;
