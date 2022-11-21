const express = require("express");
const router = express();
const {
  createCMSAkun,
  gantiStatusAkunCMS,
  gantipasswordAkunCMS,
} = require("./controller");

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.post(
  "/akun",
  authenticateUser,
  authorizeRoles("superadmin"),
  createCMSAkun
);
router.put(
  "/akun/ganti-status-akun/:id",
  authenticateUser,
  authorizeRoles("superadmin"),
  gantiStatusAkunCMS
);

router.put(
  "/akun/reset-password/:id",
  authenticateUser,
  authorizeRoles("superadmin"),
  gantipasswordAkunCMS
);
module.exports = router;
