const jwt = require("jsonwebtoken");
const signJWT = (payload) => {
  return jwt.sign(
    {
      data: payload,
    },
    JWT_SECRET,
    { expiresIn: JWT_DURATION }
  );
};
const verifyJWT = (token) => {
    return jwt.verify(token, JWT_SECRET)
};
module.exports = { signJWT, verifyJWT };
