/*user
login
registrate
get profile
forget password
change password
reset password
log out*/
const userModel = require("./user.model");
const { hashPassword, comparePassword } = require("../../utils/bcrypt");
const { mailer } = require("../../services/nodemailer");
const registrate = async (payload) => {
  payload.password = hashPassword(payload.password);
  const user = userModel.create(payload);
  if (!user) throw new error("user doent match");
  const result = await mailer(email.user);
  return result;
};
const login = async (payload) => {
  const { password, email } = payload;
  if (!password || !email) throw new error("email or password doent match");
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) throw new error("user doent exits");
  const { password: hashPw } = user;
  const result = comparePassword(hashPw, password);
  return result;
};
const get = () => {};
const getALL = () => {};
const getById = () => {};
const forgetPassword = () => {};
const changePassword = () => {};
const resetPassword = () => {};
module.exports = {
  login,
  registrate,
  get,
  getById,
  forgetPassword,
  changePassword,
  resetPassword,
  getALL,
};
