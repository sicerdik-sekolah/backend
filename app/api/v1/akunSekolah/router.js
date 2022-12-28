const express = require("express");
const router = express();
const {
  createCMSAkun,
  gantiStatusAkunCMS,
  gantipasswordAkunCMS,
  getAllUser
} = require("./controller");

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.post(
  "/akun-sekolah",
  authenticateUser,
  authorizeRoles("superadmin"),
  createCMSAkun
);
router.put(
  "/akun-sekolah/ganti-status-akun/:id",
  authenticateUser,
  authorizeRoles("superadmin"),
  gantiStatusAkunCMS
);

router.put(
  "/akun-sekolah/reset-password/:id",
  authenticateUser,
  authorizeRoles("superadmin"),
  gantipasswordAkunCMS
);

router.get("/akun/all-akun", getAllUser);

module.exports = router;
