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

const getAllLaporanBySekolah = async (req, res, next) => {
  try {
    const { id, tempat } = req.user;
    const result = await Laporan.find();

    const dataFiltered = result.filter((item) => item.asal_sekolah == tempat);

    if (!dataFiltered) {
      console.log("No Laporan with the id", id);
    }
    res.json({ data: dataFiltered });
  } catch (error) {
    next(error);
  }
};

const createLaporan = async (req, res, next) => {
  try {
    const { id, tempat } = req.user;
    console.log("req user >> ", req.user);
    const {
      tanggal_naskah_masuk,
      nama_siswa,
      nisn_siswa,
      // asal_sekolah,
      tujuan_sekolah,
      hal,
      nomor_laporan,
      tempat_tgl_lahir,
      nis,
      jenis_kelamin,
      alasan_pindah,
      tingkatDanKelas,
      nama_orang_tua,
      pekerjaan_orang_tua,
      nomor_naskah,
      jenis_surat,
      tahun_lulus,
      alamat_orangtua,
      noHp_orangtua,
      alamat_tujuan_sekolah,
      noTelp_tujuan_sekolah,
      desa_tujuan_sekolah,
      kelurahan_tujuan_sekolah,
      kecamatan_tujuan_sekolah,
      kabupatenKota_tujuan_sekolah,
      provinsi_tujuan_sekolah,
      yang_menandatangani,
    } = req.body;
    console.log("req.files >>>> ", req.files);
    console.log("path surat_pindah", req.files["surat_pindah"][0].filename);
    console.log("path surat_ortu", req.files["surat_ortu"][0].filename);
    console.log("tempat sekolah ", tempat);
    if (!req.files) {
      console.log("Ada file yang tidak di upload");
    } else {
      let result;
      const adaSuratLain = req.files["surat_lain_lain"] ? true : false;
      const adaSuratKeteranganLulus = req.files["surat_keterangan_lulus"]
        ? true
        : false;
      const adaSuratDinasPendidikanSetempat = req.files[
        "surat_dinas_pendidikan_setempat"
      ]
        ? true
        : false;
      let querySurat = {};
      if (adaSuratLain) {
        querySurat = {
          ...querySurat,
          surat_lain_lain: req.files["surat_lain_lain"][0].filename,
        };
      }
      if (adaSuratKeteranganLulus) {
        querySurat = {
          ...querySurat,
          surat_keterangan_lulus:
            req.files["surat_keterangan_lulus"][0].filename,
        };
      }
      if (adaSuratDinasPendidikanSetempat) {
        querySurat = {
          ...querySurat,
          surat_dinas_pendidikan_setempat:
            req.files["surat_dinas_pendidikan_setempat"][0].filename,
        };
      }

      result = new Laporan({
        id_sekolah: id,
        tanggal_naskah_masuk,
        nama_siswa,
        nisn_siswa,
        asal_sekolah: tempat,
        tujuan_sekolah,
        hal,
        nomor_laporan,
        tempat_tgl_lahir,
        nis,
        jenis_kelamin,
        alasan_pindah,
        tingkatDanKelas,
        nama_orang_tua,
        pekerjaan_orang_tua,
        nomor_naskah,
        jenis_surat,
        tahun_lulus,
        alamat_orangtua,
        noHp_orangtua,
        alamat_tujuan_sekolah,
        noTelp_tujuan_sekolah,
        desa_tujuan_sekolah,
        kelurahan_tujuan_sekolah,
        kecamatan_tujuan_sekolah,
        kabupatenKota_tujuan_sekolah,
        provinsi_tujuan_sekolah,
        yang_menandatangani,
        surat_pindah: req.files["surat_pindah"][0].filename,
        surat_ortu: req.files["surat_ortu"][0].filename,
        ...querySurat,
      });

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

const ubahStatusTTDKepsek = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Laporan.findOne({ _id: id });

    if (!result) {
      console.log("No Laporan with the id ", id);
    }
    result.status_ttd_kepsek = !result.status_ttd_kepsek;
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

const updateDataLaporanTTDKepsek = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Laporan.findOne({ _id: id });
    console.log("req files >>> ", req.files);
    const newSuratTelahTTD = req.files["surat_pindah"][0].filename;
    if (!result) {
      console.log("No Laporan with the id ", id);
    }

    if (!req.files) {
      console.log("file tidak diupload");
    } else {
      console.log(newSuratTelahTTD, "SURAT TTD");
      result.surat_pindah = newSuratTelahTTD;
      result.status_kirim_dari_kepsek = !result.status_kirim_dari_kepsek;
      await result.save();
      res.json({ data: result });
    }
  } catch (error) {
    next(error);
  }
};
const updateDataLaporanVerifikasi = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      nomor_naskah,
      jenis_surat,
      yang_menandatangani,
      tanggal_naskah_disposisi,
    } = req.body;
    const result = await Laporan.findOne({ _id: id });

    if (!result) {
      console.log("No Laporan with the id ", id);
    }
    result.yang_menandatangani = yang_menandatangani;
    result.nomor_naskah = nomor_naskah;
    result.jenis_surat = jenis_surat;
    result.tanggal_naskah_disposisi = tanggal_naskah_disposisi;
    await result.save();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

// tugasnya untuk membuat default
const kirimNaskah = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("path surat_pindah", req.files["surat_disdik"][0].filename);
    if (!req.files) {
      console.log("Ada file yang tidak di upload");
    } else {
      const result = await Laporan.findOne({ _id: id });
      result.surat_disdik = req.files["surat_disdik"][0].filename;
      result.status_laporan = false;
      await result.save();
      res.json({ data: result });
    }
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
  updateDataLaporanVerifikasi,
  kirimNaskah,
  getAllLaporanBySekolah,
  ubahStatusTTDKepsek,
  updateDataLaporanTTDKepsek,
};
