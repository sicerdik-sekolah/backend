const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { model, Schema } = mongoose;

let akunSchema = Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email harus diisi"],
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
      minlength: 6,
    },
    nik: {
      type: String,
      required: [true, "Nik harus diisi"],
    },
    nip: {
      type: String,
      required: [true, "Nip harus diisi"],
    },
    tempat: {
      type: String,
      required: [true, "Tempat harus diisi"],
    },
    role: {
      type: String,
      enum: ["kasubag", "staff", "sekretaris"],
    },
    statusAkun:{
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
  }
);

akunSchema.pre("save", async function (next) {
  const Akun = this;
  if (Akun.isModified("password")) {
    Akun.password = await bcrypt.hash(Akun.password, 12);
  }
  next();
});

akunSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};
module.exports = model("Akun", akunSchema);
