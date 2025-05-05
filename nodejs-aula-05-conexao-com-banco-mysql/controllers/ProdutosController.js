import express from "express";
const router = express.Router();

import Produto from "../models/Produto.js";

// ROTA PEDIDOS
router.get("/produtos",function(req,res){
    Cliente.findAll().then((produtos) => {
        res.render("produtos", {
          produtos: produtos,
        });
      }).catch((error) => {
        console.log(error);
      });
});

export default router;
