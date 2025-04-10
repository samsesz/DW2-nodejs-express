import express from "express"
// Carregando o metodo do express para gerenciamento de rotas
const router = express.Router();

// Rota de produtos
router.get("/produtos", (req, res) => {

    // Array com lista
    const produtos = [
        { nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
        { nome: "Tablet Samsung", preco: 900, categoria: "Eletrônico"},
        { nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
        { nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos"},
    ];
    
    res.render("produtos", {
      //Enviando variaveis para a pagina
      produtos : produtos
    });
  });

//   Exportando o modulo
export default router;