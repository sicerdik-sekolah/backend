const Superadmin = require("../../api/v1/superadmin/model");
const { BadRequestError } = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const createSuperadmin = async (req) => {
  const { role, email, password, confirmPassword, name } = req.body;
  if (password != confirmPassword) {
    throw new BadRequestError("Password and Confirm invalid");
  }
  const result = await Superadmin.create({ email, name, password, role });
  return result;
};

module.exports = {
  createSuperadmin,
};
