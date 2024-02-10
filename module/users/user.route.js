const router = require("express").Router();
const userController = require("./user.controller");
router.post("/login", (req, res, next) => {
  try {
    const result = userController.login(req.body);
    res.json({ data: result });
  } catch (e) {
    next(e);
  }
});
router.get("/", async(req, res, next) => {
    try {
      const result =await userController.login(req.body);
      res.json({ data: result });
    } catch (e) {
      next(e);
    }
  });
router.post("/registrate", (req, res, next) => {
  try {
    const result = userController.registrate(req.body);
    res.json({ data: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
