const createTokenUser = (user) => {
  return {
    nama: user.nama,
    userId: user._id,
    role: user.role,
    tempat: user.tempat,
    email: user.email,
  };
};

module.exports = createTokenUser;
