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
  updateDataLaporanVerifikasi,
  kirimNaskah,
  getAllLaporanBySekolah,
  updateDataLaporanTTDKepsek,
  ubahStatusTTDKepsek,
  ubahStatusKirimDariKepsek,
} = require("./controller");
const { uploadMiddleware } = require("../../../utils/multer");

router.get("/laporan", authenticateUser, getAllLaporan);
router.get("/laporan/:id", authenticateUser, getOneLaporan);
router.get("/laporan-sekolah", authenticateUser, getAllLaporanBySekolah);
router.post(
  "/laporan",
  authenticateUser,
  authorizeRoles("staff_sekolah"),
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
      name: "surat_lain_lain",
      maxCount: 1,
    },
    {
      name: "surat_keterangan_lulus",
      maxCount: 1,
    },
    {
      name: "surat_dinas_pendidikan_setempat",
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
  authorizeRoles("kasubag", "sekretaris"),
  ubahStatusTTD
);
router.put(
  "/laporan/ubah-status-ttd-kepsek/:id",
  authenticateUser,
  authorizeRoles("kepala_sekolah"),
  ubahStatusTTDKepsek
);
router.put(
  "/laporan/ubah-status-kirim/:id",
  authenticateUser,
  authorizeRoles("kasubag", "sekretaris"),
  ubahStatusKirim
);
router.put(
  "/laporan/ubah-status-kirim-kepsek/:id",
  authenticateUser,
  authorizeRoles("kepala_sekolah"),
  ubahStatusKirimDariKepsek
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
router.put(
  "/laporan/update-data-verifikasi/:id",
  authenticateUser,
  authorizeRoles("staff"),
  updateDataLaporanVerifikasi
);
router.put(
  "/laporan/update-surat-ttd-kepsek/:id",
  authenticateUser,
  authorizeRoles("kepala_sekolah"),
  uploadMiddleware.fields([
    {
      name: "surat_pindah",
      maxCount: 1,
    },
  ]),
  updateDataLaporanTTDKepsek
);
router.put(
  "/laporan/kirim-laporan/:id",
  authenticateUser,
  authorizeRoles("kasubag", "sekretaris"),
  // middlware untuk upload file,
  uploadMiddleware.fields([
    {
      name: "surat_disdik",
      maxCount: 1,
    },
  ]),
  kirimNaskah
);

module.exports = router;
