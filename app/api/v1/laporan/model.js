const mongoose = require("mongoose");

const laporanSchema = new mongoose.Schema({
  tanggal_naskah_masuk: {
    type: Date,
    required: [true, "Masukkan Tanggal Naskah Dibuat"],
  },
  tanggal_naskah_disposisi: {
    type: Date,
    default: "",
  },
  nama_siswa: {
    type: String,
    required: [true, "Masukkan Nama Siswa"],
    minlength: 3,
    maxlength: 50,
  },
  nisn_siswa: {
    type: String,
    required: [true, "Masukkan NISN Siswa"],
    minlength: 3,
    maxlength: 50,
  },
  asal_sekolah: {
    type: String,
    required: [true, "Masukkan asal sekolah Siswa"],
    minlength: 3,
    maxlength: 50,
  },
  tujuan_sekolah: {
    type: String,
    required: [true, "Masukkan tujuan sekolah Siswa"],
    minlength: 3,
    maxlength: 50,
  },
  hal: {
    type: String,
    required: [true, "Masukkan hal laporan"],
    minlength: 3,
    maxlength: 50,
  },
  nomor_laporan: {
    type: String,
    required: [true, "Masukkan nomor laporan"],
  },
  yang_menandatangani: {
    type: String,
    default: "",
  },
  status_verifikasi: {
    type: Boolean,
    default: false,
  },
  status_ttd: {
    type: Boolean,
    default: false,
  },
  status_kirim: {
    type: Boolean,
    default: false,
  },
  surat_pindah: {
    type: String,
    required: [
      true,
      "upload surat pindah dari sekolah / surat masuk ke sekolah",
    ],
  },
  surat_ortu: {
    type: String,
    required: [true, "upload surat permohonan ortu"],
  },
  surat_plh: {
    type: String,
  },
  surat_disdik: {
    type: String,
    default: "",
  },
  status_laporan: {
    type: Boolean,
    default: true,
  },
  status_ditolak_ttd: {
    type: Boolean,
    default: false,
  },
  komentar_ttd: {
    type: String,
    default: "",
  },
  komentar_verifikasi: {
    type: String,
    default: "",
  },
  status_ditolak_verifikasi: {
    type: Boolean,
    default: false,
  },
  status_revisi: {
    type: Boolean,
    default: false,
  },
  tempat_tgl_lahir: {
    type: String,
    default: "",
    required: [true, "Masukkan tempat tanggal lahir"],
  },
  nis: {
    type: String,
    default: "",
    required: [true, "Masukkan nis"],
  },
  jenis_kelamin: {
    type: String,
    enum: ["pria", "wanita"],
    default: "",
    required: [true, "Masukan alamat"],
  },
  alasan_pindah: {
    type: String,
    default: "",
    required: [true, "Masukan keterangan alasan pindah"],
  },
  kelas: {
    type: String,
    default: "",
    required: [true, "Masukan kelas"],
  },
  nama_orang_tua: {
    type: String,
    default: "",
    required: [true, "Masukan nama orang tua"],
  },
  pekerjaan_orang_tua: {
    type: String,
    default: "",
    required: [true, "Masukan pekerjaan orang tua"],
  },
  nomor_naskah: {
    type: String,
    default: "",
  },
  jenis_surat: {
    type: String,
    default: "",
    required: [true, "Masukan jenis surat"],
  },
  tahun_lulus : {
    type : String,
    default : "",
  },
});

module.exports = mongoose.model("Laporan", laporanSchema);
