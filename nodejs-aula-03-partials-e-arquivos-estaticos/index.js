// Importando o pacote do express.js
const express = require("express");
// Carregando o metodo principal do express
const app = express(); //Iniciando o express

// Configurando a view engine - ejs
app.set("view engine", "ejs");

// Criando rota principal (raiz) do site
// Metodo get cria uma rota na aplicação
// REQ -> Trata a requisição
// RES -> Trata a resposta
app.get("/", (req, res) => {
   res.render("index");
});

// Rota de perfil
// :nome -> parâmetro obrigatorio
// :nome? -> parâmetro opcional
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

// Rota de produtos
app.get("/produtos/:produto?", (req, res) => {
  // coletando parametros de rota
  const produto = req.params.produto 

  // Array com lista
  const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook']
  
  res.render("produtos", {
    //Enviando variaveis para a pagina
    produto : produto,
    produtos : produtos
  });
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
