import express from "express";
import Clientes from "../models/Clientes.js";
// Carregando o metodo do express para gerenciamento de rotas
const router = express.Router();

// Rota de clientes
router.get("/clientes", (req, res) => {
  Clientes.findAll().then((clientes) => {
    res.render("clientes", {
      clientes : clientes,
     });
   });
});


router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Clientes.create({
    nome : nome,
    cpf : cpf,
    endereco : endereco
  }).then(() => {
    res.redirect("/clientes")
  })
})

router.get("/clientes/delete/:id", (req,res) => {
  const id = req.params.id
  Clientes.destroy ({
    where: { id : id }
  }).then(() => {
    res.redirect("/clientes")
  })
})

router.get("/clientes/edit/:id", (req,res) => {
  const id = req.params.id
  Clientes.findByPk(id).then(function(cliente) {
    res.render("clientesEdit", {
      cliente : cliente
    })
  })
})
router.post("/clientes/update/:id", (req,res) => {
  const id = req.params.id
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Clientes.update(
    {
    id : id,
    nome : nome,
    cpf : cpf,
    endereco : endereco
    },
  {where: {id : id}}
).then(() => {
  res.redirect("/clientes")
})
})
//   Exportando o modulo
export default router;