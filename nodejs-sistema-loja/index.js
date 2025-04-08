
const express = require("express");

const app = express(); 

app.set("view engine", "ejs");

app.use(express.static('public'))

// Rota index
app.get("/", (req, res) => {
   res.render("index");
});

// Rota clientes
app.get("/clientes", (req, res) => {
  res.render("clientes");
});

// Rota pedidos
app.get("/pedidos", (req, res) => {
  const pedido = req.params.pedido

  const pedidos = ['Pedido 1', 'Pedido 2', 'Pedido 3']
  
  res.render("pedidos", {
    pedido : pedido,
    pedidos: pedidos
  });
});

// Rota de produtos
app.get("/produtos", (req, res) => {
  const produto = req.params.produto 

  const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook', 'SmartWatch']
  
  res.render("produtos", {
    produto : produto,
    produtos : produtos
  });
});

app.get("/produtos/computador", (req, res) => {
  res.render("produtos_computador");
});

app.get("/produtos/celular", (req, res) => {
  res.render("produtos_celular");
});

app.get("/produtos/tablet", (req, res) => {
  res.render("produtos_tablet");
});

app.get("/produtos/notebook", (req, res) => {
  res.render("produtos_notebook");
});

app.get("/produtos/smartwatch", (req, res) => {
  res.render("produtos_smartwatch");
});


app.listen(8082, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado.");
  }
});
