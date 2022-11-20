const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { model, Schema } = mongoose;

let superadminsSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama harus diisi"],
      minlength: 3,
      maxlength: 50,
    },
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
    role: {
      type: String,
      enum: ["superadmin"],
    },
  },
  {
    timestamps: true,
  }
);

superadminsSchema.pre("save", async function (next) {
  const Admin = this;
  if (Admin.isModified("password")) {
    Admin.password = await bcrypt.hash(Admin.password, 12);
  }
  next();
});

superadminsSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};
module.exports = model("Superadmin", superadminsSchema);
