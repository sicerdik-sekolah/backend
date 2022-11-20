const { signinSuperAdmin } = require("../../../services/mongoose/auth");
const { StatusCodes } = require("http-status-codes");

const signinCMSSuperAdmin = async (req, res, next) => {
  try {
    const result = await signinSuperAdmin(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// const signinCMSAkun = async (req, res, next) => {
//   try {
//     const result = await signinAkun(req);

//     res.status(StatusCodes.CREATED).json({
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = { signinCMSSuperAdmin };
