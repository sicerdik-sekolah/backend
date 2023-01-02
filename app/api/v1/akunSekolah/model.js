const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { model, Schema } = mongoose;

let akunSekolahSchema = Schema(
  {
    nama: {
      type: String,
      unique: true,
      required: [true, "Nama belum diisi!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "E-mail belum diisi!"],
    },
    password: {
      type: String,
      required: [true, "Password belum diisi!"],
      minLength: 6,
    },
    nik: {
      type: String,
      required: [true, "NIK harus diisi!"],
    },
    nip: {
      type: String,
      required: [true, "NIP harus diisi!"],
    },
    role: {
      type: String,
      enum: ["staff_sekolah", "kepala_sekolah"],
    },
    tempat: {
      type: String,
      required: [true, "Nama tempat belum diisi"],
    },

    alamatSurat: {
      type: String,
      required: [true, "Alamat sekolah untuk surat belum diisi"],
    },
    emailSurat: {
      type: String,
      default: "",
      required: [true, "email sekolah untuk surat belum diisi"],
    },

    statusAkun: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

akunSekolahSchema.pre("save", async function (next) {
  const Akun = this;
  if (Akun.isModified("password")) {
    Akun.password = await bcrypt.hash(Akun.password, 12);
  }
  next();
});

akunSekolahSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = model("akunSekolah", akunSekolahSchema);
