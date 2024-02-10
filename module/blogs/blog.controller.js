/*
blog
get all blog
authentac blog
add new blog
edit new blog
get one blog
delete blog
serach blog*/
const { error } = require("console");
const blogModel = require("./blog.model");
const getAll = () => {};
const create = (payload) => {};
const get = () => {};
const getById = ({ _id }) => {};
const updateById = ({ _id }, payload) => {};
const removeById = ({ _id }) => {};
const bookmarkblog = (payload) => {
  const { users, blogs } = payload;
  if (!users || !blogs) throw new error("user or blog is missing");
  return blogModel.create(payload);
};
const blogrouter = () => {};
module.exports = {
  create,
  get,
  getAll,
  getById,
  removeById,
  updateById,
  bookmarkblog,
  blogrouter,
};
