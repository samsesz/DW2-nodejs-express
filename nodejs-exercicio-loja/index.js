import express from "express";

const app = express();

import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";

import connection from "./config/sequelize-config.js";

import Clientes from "./models/Clientes.js";

connection.authenticate().then(() => {
  console.log("Conexão realizada")
}).catch((error) => {
  console.log(error);
});

connection.query(`CREATE DATABASE IF NOT EXISTS Clientes;`).then(() => {
  console.log("Banco criado");
}).catch((error) => {
  console.log(error);
});

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", function (req,res) {
  res.render("login");
});

app.get("/login", function (req,res){
  res.render("login")
})

app.listen(8082, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado.");
  }
});
