const Akun = require("../../api/v1/akun/model");
const AkunSekolah = require("../../api/v1/akunSekolah/model");
const { BadRequestError } = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const createAkun = async (req, res) => {
  const {
    password,
    role,
    confirmPassword,
    email,
    nik,
    nip,
    tempat,
    statusAkun,
  } = req.body;
  if (password != confirmPassword) {
    throw new BadRequestError("Password and Confirm invalid");
  }

if(role == "kasubag" || role == "staff" || role == "sekretaris") {
    const result = await Akun.create({
      email,
      password,
      nik,
      nip,
      tempat,
      role,
      statusAkun,
    });

    return result;
  }

  else if(role == "staff_sekolah" || role == "kepala_sekolah"){
    const result = await AkunSekolah.create({
      email,
      password,
      nik,
      nip,
      tempat,
      role,
      statusAkun,
    });

  return result;
};

const gantiStatusAkun = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Akun.findById(id);

    result.statusAkun = !result.statusAkun;
    await result.save();
    return result;
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const result = await Akun.findById(id);

    result.password = password;
    await result.save();
    return result;
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createAkun,
  gantiStatusAkun,
  resetPassword,
};
