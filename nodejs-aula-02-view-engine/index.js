// Importando o pacote do express.js
const express = require("express");
// Carregando o metodo principal do express
const app = express(); //Iniciando o express

// Configurando a view engine - ejs
app.set('view engine', 'ejs')

// Criando rota principal (raiz) do site
// Metodo get cria uma rota na aplicação
// REQ -> Trata a requisição
// RES -> Trata a resposta
app.get("/", (req, res) => {
   res.send("<h1>Bem-vindo ao meu primeiro site em Node.js</h1><br><p>Iniciando estudos com node js!</p>");
});

// Rota de perfil
// :nome -> parâmetro obrigatorio
// :nome? -> parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
    // Coletando o parametro da rota e gravando na variavel
    const nome = req.params.nome
    // res.send("<h1>Perfil do usuário</h1>");
    if (nome){
        res.send(`<h2>Olá, ${nome}! Bem-vindo ao seu perfil!</h2>`)
    } else {
        res.send(`<h2>Faça login para acessar o seu perfil!</h2>`)
    }   
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
app.listen(8080,  (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado.");
  }
});
