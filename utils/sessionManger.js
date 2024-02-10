const { error } = require("console");
const { verifyJWT } = require("../utils/token");

const checkroles = (sysRoles) => {
  return (req, res, next) => {
    const token = req.header.tokenacess;
    if (!token) throw new error("token is missing");
    const user = verifyJWT(token);
    if (!user) throw new error("permission dened");
    const isValidRoles = sysRoles.some((value) => value.include(sysRole));
  };
};
module.exports = { checkroles };
