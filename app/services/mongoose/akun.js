const Akun = require("../../api/v1/akun/model");
const { BadRequestError } = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const createAkun = async (req, res) => {
  const { password, role, confirmPassword, email, nik, nip, tempat } = req.body;
  if (password != confirmPassword) {
    throw new BadRequestError("Password and Confirm invalid");
  }

  const result = await Akun.create({
    email,
    password,
    nik,
    nip,
    tempat,
    role,
  });

  return result;
};
module.exports = {
  createAkun,
};
