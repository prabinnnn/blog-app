/*
blog
getallblog
authentaic author blog
add new blog
edit new blog
delete blog
serach one blog
get one blog
bookmarks blog

*/
const router = require("express").Router();
const blogController = require("./blog.controller");
router.get("/", (req, res, next) => {
  try {
    const result = blogController.login(req.body);
    res.json({ data: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
