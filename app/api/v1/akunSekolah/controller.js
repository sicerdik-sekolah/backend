const { StatusCodes } = require("http-status-codes");
const {
  createAkun,
  gantiStatusAkun,
  resetPassword,
} = require("../../../services/mongoose/akun");

// create
const createCMSAkun = async (req, res, next) => {
  try {
    const result = await createAkun(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const gantiStatusAkunCMS = async (req, res, next) => {
  try {
    const result = await gantiStatusAkun(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const gantipasswordAkunCMS = async (req, res, next) => {
  try {
    const result = await resetPassword(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const result = await Akun.find();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCMSAkun,
  gantiStatusAkunCMS,
  gantipasswordAkunCMS,
  getAllUser
};
