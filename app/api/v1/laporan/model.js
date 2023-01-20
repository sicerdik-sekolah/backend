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
    // \
  },
  surat_ortu: {
    type: String,
    required: [true, "upload surat permohonan ortu"],
  },
  surat_lain_lain: {
    type: String,
  },
  surat_keterangan_lulus: {
    type: String,
  },
  surat_dinas_pendidikan_setempat: {
    type: String,
  },
  surat_disdik: {
    type: String,
    default: "",
  },
  status_ttd_kepsek: {
    type: Boolean,
    default: false,
  },
  status_laporan: {
    type: Boolean,
    default: true,
  },
  status_kirim_dari_kepsek: {
    type: Boolean,
    default: false,
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
    enum: ["Laki-Laki", "Perempuan"],
    default: "",
    required: [true, "Masukan jeniskelamin"],
  },
  alasan_pindah: {
    type: String,
    default: "",
    required: [true, "Masukan keterangan alasan pindah"],
  },
  tingkatDanKelas: {
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
  },
  tahun_lulus: {
    type: String,
    default: "",
    // required: [true, "Masukan alamat orang tua"],
  },
  alamat_orangtua: {
    type: String,
    default: "",
    required: [true, "Masukan alamat orang tua"],
  },
  noHp_orangtua: {
    type: String,
    default: "",
    required: [true, "Masukan noHp orang tua"],
  },
  alamat_tujuan_sekolah: {
    type: String,
    default: "",
    required: [true, "Masukan alamat tujuan sekolah"],
  },
  noTelp_tujuan_sekolah: {
    type: String,
    default: "",
    required: [true, "Masukan noTelp tujuan sekolah"],
  },
  desa_tujuan_sekolah: {
    type: String,
    default: "",
    required: [true, "Masukan desa tujuan sekolah"],
  },
  kelurahan_tujuan_sekolah: {
    type: String,
    default: "",
    required: [true, "Masukan kelurahan tujuan sekolah"],
  },
  kecamatan_tujuan_sekolah: {
    type: String,
    default: "",
    required: [true, "Masukan kecamatan tujuan sekolah"],
  },
  kabupatenKota_tujuan_sekolah: {
    type: String,
    default: "",
    required: [true, "Masukan kabupatenKota tujuan sekolah"],
  },
  provinsi_tujuan_sekolah: {
    type: String,
    default: "",
    required: [true, "Masukan provinsi tujuan sekolah"],
  },
  id_sekolah: {
    type: mongoose.Types.ObjectId,
    // required : [true, "Masukan Asal Sekolah yang Membuat Naskah"],
  },
  status_ditolak: {
    type: Boolean,
    default: false,
  },
  komentar_ditolak_verifikasi: {
    type: String,
    default: "",
  },
  komentar_ditolak_ttd: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Laporan", laporanSchema);
