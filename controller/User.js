require("../models/User");
const mongoose = require("mongoose");
const Usuario = mongoose.model("users");

const criar = (req, res) => {
  const usuario = new Usuario({
    username: req.body.username,
    email: req.body.username,
    password: req.body.password,
  });
  usuario
    .save()
    .then(() => {
      return res.status(200).json({ sucesso: "usuario criado" });
    })
    .catch((err) => {
      return res.status(500).json({ erro: "nao foi possivel criar usuario" });
    });
};

const autenticar = (req, res) => {
  Usuario.findOne({ username: req.body.username, password: req.body.password })
    .lean()
    .then((user) => {
      if (user) {
        return res.status(200).json({ result: true });
      } else {
        return res.status(404).json({ result: false });
      }
    })
    .catch(() => {
      return res.json({ result: false });
    });
};

const listar = (req, res) => {
  Usuario.find()
    .lean()
    .then((usuarios) => {
      return res.status(200).json(usuarios);
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ erro: "Não foi possível encontrar usuarios" });
    });
};




const deletar = (req, res) => {
  Usuario.deleteOne({ _id: req.body.id })
    .then(() => {
      return res.status(200).json({ messagem: "usuario deletado." });
    })
    .catch((erro) => {
      return res
        .status(500)
        .json({ mensagem: "não foi possível deletar usuario." });
    });
};

module.exports = { criar, listar, autenticar, deletar };
