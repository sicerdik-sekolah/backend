const createTokenUser = (user) => {
  console.log("user .>> ", user);
  return {
    nama: user.nama,
    userId: user._id,
    role: user.role,
    tempat: user.tempat,
    email: user.email,
    alamatSurat: user.alamatSurat,
    emailSurat: user.emailSurat,
  };
};

module.exports = createTokenUser;
