const bcryptjs = require("bcryptjs");
const hashPassword = (password) => {
  return bcryptjs.hashSync(password, SALT_ROUNDS);
};
const comparePassword = (password, hashPassword) => {
  return bcryptjs.compareSync(password, hashPassword);
};
module.exports = { hashPassword, comparePassword };
