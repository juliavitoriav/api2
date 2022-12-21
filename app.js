const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const dotenv = require("dotenv");
dotenv.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.LINK_BANCO)
  .then(() => {
    console.log("conectado ao banco");
  })
  .catch((err) => {
    console.log("erro banco: " + err);
  });

app.use("/", routes);

app.listen(3000, () => {
  console.log("servidor rodando");
});
