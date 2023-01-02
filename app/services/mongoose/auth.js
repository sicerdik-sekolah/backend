const Superadmin = require("../../api/v1/superadmin/model");
const Akun = require("../../api/v1/akun/model");
const AkunSekolah = require("../../api/v1/akunSekolah/model");
const { BadRequestError, UnauthorizedError } = require("../../errors");
const { createJWT, createTokenUser } = require("../../utils");

const signinSuperAdmin = async (req) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please Provide email and password");
  }

  const result =
    (await Superadmin.findOne({ email: email })) ||
    (await Akun.findOne({ email: email })) ||
    (await AkunSekolah.findOne({ email: email }));
  // (await Akun.findOne({ email: email }));
  console.log("result dari auth >> ", result);
  if (!result) {
    throw new UnauthorizedError("Invalid Credentials");
  }

  const isPasswordCorrect = await result.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthorizedError("Invalid Credentials");
  }

  const token = createJWT({ payload: createTokenUser(result) });
  console.log("result signin >>> ", result);
  if (result.role === "kasubag" || result.role === "sekretaris") {
    return {
      token,
      nama: result.nama,
      email: result.email,
      id: result._id,
      tempat: result.tempat,
      password: result.password,
      role: result.role,
      nip: result.nip,
      statusAkun: result.statusAkun,
    };
  } else if (
    result.role === "staff_sekolah" ||
    result.role === "kepala_sekolah"
  ) {
    return {
      token,
      nama: result.nama,
      email: result.email,
      id: result._id,
      tempat: result.tempat,
      password: result.password,
      role: result.role,
      nip: result.nip,
      alamatSurat: result.alamatSurat,
      emailSurat: result.emailSurat,
      statusAkun: result.statusAkun,
    };
  } else {
    return {
      token,
      nama: result.nama,
      email: result.email,
      id: result._id,
      tempat: result.tempat,
      password: result.password,
      role: result.role,
      nip: result.nip,
      statusAkun: result.statusAkun,
    };
  }
};

// const signinAkun = async (req) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     throw new BadRequestError("Please Provide email and password");
//   }

//   const result = await Akun.findOne({ email: email });

//   if (!result) {
//     throw new UnauthorizedError("Invalid Credentials");
//   }

//   const isPasswordCorrect = await result.comparePassword(password);
//   if (!isPasswordCorrect) {
//     throw new UnauthorizedError("Invalid Credentials");
//   }

//   const token = createJWT({ payload: createTokenUser(result) });

//   return {
//     token,
//     email: result.email,
//     password: result.password,
//     role: result.role,
//   };
// };

module.exports = { signinSuperAdmin };
