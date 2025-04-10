import express from "express";

const app = express();

import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8082, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado.");
  }
});
