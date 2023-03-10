const express = require("express");
const router = express();
const {
  createCMSAkun,
  gantiStatusAkunCMS,
  gantipasswordAkunCMS,
  getAllUser,
  getAllUserSekolahDanDinas,
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
router.get(
  "/akun/all-akun",
  authenticateUser,
  authorizeRoles("superadmin"),
  getAllUser
);
router.get(
  "/akun/all-akun-dinas-dan-sekolah",
  authenticateUser,
  authorizeRoles("superadmin"),
  getAllUserSekolahDanDinas
);
module.exports = router;
