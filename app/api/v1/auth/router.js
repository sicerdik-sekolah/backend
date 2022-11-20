const express = require("express");
const router = express();
const { signinCMSSuperAdmin } = require("./controlller");
router.post("/auth/signin", signinCMSSuperAdmin);
// router.post("/auth/signin", signinCMSAkun);

module.exports = router;
