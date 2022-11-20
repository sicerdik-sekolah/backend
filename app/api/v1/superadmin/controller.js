const { StatusCodes } = require("http-status-codes");
const { createSuperadmin } = require("../../../services/mongoose/superadmin");
// create
const createCMSSuperadmin = async (req, res, next) => {
  try {
    const result = await createSuperadmin(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCMSSuperadmin,
};
