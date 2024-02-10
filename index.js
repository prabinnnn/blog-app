require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./routes");
const PORT = Number(process.env.PORT);
mongoose.connect(process.env.DB).then(() => console.log("Connected!"));
app.use(morgan("dev"));
app.use(express.json());
app.use("/", indexRouter);
app.use((err, req, res, next) => {
  err = err ? err.toString() : "something is missing";
  res.status(500).json({ msg: err });
});
app.listen(PORT, () => {
  console.log("app is runing");
});
