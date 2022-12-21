const app = require("express")();

const {
  listar,
  autenticar,
  criar,
  deletar,
} = require("../controller/User");

app.post("/usuarios/criar", criar);
app.post("/usuarios/autenticar", autenticar);
app.get("/usuarios/listar", listar);
app.delete("/usuarios/deletar", deletar);

module.exports = app;
