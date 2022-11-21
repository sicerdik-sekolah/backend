const router = require("express").Router();
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");
const {
  getAllLaporan,
  createLaporan,
  ubahStatusVerifikasi,
  ubahStatusTTD,
  ubahStatusKirim,
  ubahStatusLaporan,
  kembalikanSuratSaatTTD,
  kembalikanSuratSaatVerifikasi,
  getOneLaporan,
  ubahStatusRevisi,
} = require("./controller");
const { uploadMiddleware } = require("../../../utils/multer");

router.get("/laporan", authenticateUser, getAllLaporan);
router.get("/laporan/:id", authenticateUser, getOneLaporan);

router.post(
  "/laporan",
  authenticateUser,
  authorizeRoles("staff"),
  uploadMiddleware.fields([
    {
      name: "surat_pindah",
      maxCount: 1,
    },
    {
      name: "surat_ortu",
      maxCount: 1,
    },
    {
      name: "surat_plh",
      maxCount: 1,
    },
  ]),
  createLaporan
);

router.put(
  "/laporan/ubah-status-verifikasi/:id",
  authenticateUser,
  authorizeRoles("staff"),
  ubahStatusVerifikasi
);

router.put(
  "/laporan/ubah-status-ttd/:id",
  authenticateUser,
  authorizeRoles("kasubag,sekretaris"),
  ubahStatusTTD
);
router.put(
  "/laporan/ubah-status-kirim/:id",
  authenticateUser,
  authorizeRoles("kasubag", "sekretaris"),
  ubahStatusKirim
);
router.put(
  "/laporan/ubah-status-revisi/:id",
  authenticateUser,
  authorizeRoles("staff"),
  ubahStatusRevisi
);
router.put(
  "/laporan/ubah-status-laporan/:id",
  authenticateUser,
  authorizeRoles("staff"),
  ubahStatusLaporan
);
router.put(
  "/laporan/kembalikan-surat-saat-verifikasi/:id",
  authenticateUser,
  authorizeRoles("staff"),
  kembalikanSuratSaatVerifikasi
);
router.put(
  "/laporan/kembalikan-surat-saat-ttd/:id",
  authenticateUser,
  authorizeRoles("kasubag", "sekretaris"),
  kembalikanSuratSaatTTD
);

module.exports = router;
