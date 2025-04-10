import express from "express"
// Carregando o metodo do express para gerenciamento de rotas
const router = express.Router();

// Rota de clientes
router.get("/pedidos", (req, res) => {

    // Array com lista
    const pedidos = [
        { número: 1, valor: 60000},
        { número: 2, valor: 345},
        { número: 3, valor: 5000},
        { número: 4, valor: 150},
        { número: 5, valor: 5450},
        
    ];
    
    res.render("pedidos", {
      //Enviando variaveis para a pagina
      pedidos : pedidos
    });
  });

//   Exportando o modulo
export default router;