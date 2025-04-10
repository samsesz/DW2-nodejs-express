import express from "express"
// Carregando o metodo do express para gerenciamento de rotas
const router = express.Router();

// Rota de clientes
router.get("/clientes", (req, res) => {

    // Array com lista
    const clientes = [
        { id: 1, nome: "Maria", cpf: "234.234.233.-01", endereco: "Av.Paulista, 543"},
        { id: 2, nome: "João", cpf:"233.233.233-09", endereco: "Av.Paulista, 222"},
        { id: 3, nome: "Carlos", cpf: "433.544.655-08", endereco: "Jardim das Palmeiras, 05"},
        { id: 4, nome: "Mariana", cpf: "234.456.789-00", endereco: "Avenida Marfim, 43"},
        { id: 5, nome: "José", cpf: "499.234.432-03", endereco: "Rua benedito da silva, 345"},
        
    ];
    
    res.render("clientes", {
      //Enviando variaveis para a pagina
      clientes : clientes
    });
  });

//   Exportando o modulo
export default router;