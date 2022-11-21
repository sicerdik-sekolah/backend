const Laporan = require("./model");
const fs = require("fs");

const getAllLaporan = async (req, res, next) => {
  try {
    const result = await Laporan.find();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

const createLaporan = async (req, res, next) => {
  try {
    const {
      tanggal_naskah_masuk,
      nama_siswa,
      nisn_siswa,
      asal_sekolah,
      tujuan_sekolah,
      hal,
      nomor_laporan,
    } = req.body;
    console.log("req.files >>>> ", req.files);
    console.log("path surat_pindah", req.files["surat_pindah"][0].filename);
    console.log("path surat_ortu", req.files["surat_ortu"][0].filename);
    if (!req.files) {
      console.log("Ada file yang tidak di upload");
    } else {
      let result;
      const adaSuratPlh = req.files["surat_plh"] ? true : false;

      if (adaSuratPlh) {
        result = new Laporan({
          tanggal_naskah_masuk,
          nama_siswa,
          nisn_siswa,
          asal_sekolah,
          tujuan_sekolah,
          hal,
          nomor_laporan,
          surat_pindah: req.files["surat_pindah"][0].filename,
          surat_ortu: req.files["surat_ortu"][0].filename,
          surat_plh: req.files["surat_plh"][0].filename,
        });
      } else {
        result = new Laporan({
          tanggal_naskah_masuk,
          nama_siswa,
          nisn_siswa,
          asal_sekolah,
          tujuan_sekolah,
          hal,
          nomor_laporan,
          surat_pindah: req.files["surat_pindah"][0].filename,
          surat_ortu: req.files["surat_ortu"][0].filename,
          // surat_plh,
        });
      }

      await result.save();

      res.json({ data: result });
    }
  } catch (error) {
    next(error);
  }
};

const getOneLaporan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Laporan.findOne({ _id: id });
    if (!result) {
      console.log("No Laporan with the id ", id);
    }
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};
const ubahStatusVerifikasi = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Laporan.findOne({ _id: id });

    if (!result) {
      console.log("No Laporan with the id ", id);
    }
    result.status_verifikasi = !result.status_verifikasi;
    await result.save();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

const ubahStatusTTD = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Laporan.findOne({ _id: id });

    if (!result) {
      console.log("No Laporan with the id ", id);
    }
    result.status_ttd = !result.status_ttd;
    await result.save();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

const ubahStatusKirim = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Laporan.findOne({ _id: id });

    if (!result) {
      console.log("No Laporan with the id ", id);
    }
    result.status_kirim = !result.status_kirim;
    await result.save();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

const kembalikanSuratSaatVerifikasi = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { komentar_verifikasi } = req.body;
    const result = await Laporan.findOne({ _id: id });

    if (!result) {
      console.log("No Laporan with the id ", id);
    }

    console.log("komentar : ", komentar_verifikasi);

    result.komentar_verifikasi = komentar_verifikasi;
    result.status_ditolak_verifikasi = !result.status_ditolak_verifikasi;
    result.status_revisi = true;
    await result.save();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

const kembalikanSuratSaatTTD = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { komentar_ttd } = req.body;
    const result = await Laporan.findOne({ _id: id });

    if (!result) {
      console.log("No Laporan with the id ", id);
    }
    result.komentar_ttd = komentar_ttd;
    result.status_ditolak_ttd = !result.status_ditolak_ttd;
    await result.save();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

const ubahStatusLaporan = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Laporan.findOne({ _id: id });

    if (!result) {
      console.log("No Laporan with the id ", id);
    }
    result.status_laporan = !result.status_laporan;
    await result.save();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

const ubahStatusRevisi = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Laporan.findOne({ _id: id });

    if (!result) {
      console.log("No Laporan with the id ", id);
    }
    result.status_revisi = !result.status_revisi;
    await result.save();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLaporan,
  createLaporan,
  getOneLaporan,
  ubahStatusVerifikasi,
  ubahStatusTTD,
  ubahStatusKirim,
  ubahStatusRevisi,
  ubahStatusLaporan,
  kembalikanSuratSaatTTD,
  kembalikanSuratSaatVerifikasi,
};