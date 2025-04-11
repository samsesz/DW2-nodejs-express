import express from "express"
// Carregando o metodo do express para gerenciamento de rotas
const router = express.Router();

// Rota de produtos
router.get("/produtos", (req, res) => {

    // Array com lista
    const produtos = [
        { nome: "Celular Samsung Z-Flip", preco: 3400, categoria: "Smarthpones", imagem: "/images/zflip.webp"},
        { nome: "Tablet Samsung", preco: 900, categoria: "Eletrônico", imagem: "/images/tablet.jpg"},
        { nome: "Notebook Acer Aspire 5", preco: 3200, categoria: "Computadores", imagem: "/images/notebook.jpg"},
        { nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos", imagem: "/images/fone.jpg"},
        { nome: "Computador Gamer", preco: 5400, categoria: "Computadores", imagem: "/images/pcgamer.webp"},
    ];
    
    res.render("produtos", {
      //Enviando variaveis para a pagina
      produtos : produtos
    });
  });

//   Exportando o modulo
export default router;''