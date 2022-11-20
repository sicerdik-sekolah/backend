const { StatusCodes } = require("http-status-codes");
const { createAkun } = require("../../../services/mongoose/akun");
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

module.exports = {
  createCMSAkun,
};
