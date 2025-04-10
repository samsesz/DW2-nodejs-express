// Importando o pacote do express.js
// const express = require("express");
// Modo ES6 de importação
import express from "express"
// Carregando o metodo principal do express
const app = express(); //Iniciando o express

// Importando os Controllers (onde estao as rotas)
import ProdutosController from "./controllers/ProdutosController.js"

// Configurando a view engine - ejs
app.set("view engine", "ejs");

// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

//  Configurando o express para utilizar as rotas dos Controllers
app.use("/", ProdutosController)

// Criando rota principal (raiz) do site
// Metodo get cria uma rota na aplicação
// REQ -> Trata a requisição
// RES -> Trata a resposta
app.get("/", (req, res) => {
   res.render("index");
});

// Iniciando o servidos na porta Porta 8080
// O metodo listen do Express inicia um servidor
app.listen(8082, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado.");
  }
});
