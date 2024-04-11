const express = require("express");
const router = express.Router();
const produtoController = require("../controller/produtoController.js");

router.get("/produto", produtoController.getAllProduto);
router.post("/produto", produtoController.createProduto);
router.put("/produto/:id", produtoController.updateProduto);
router.delete("/produto/:id", produtoController.deleteProduto);
router.get("/produto/:id", produtoController.getProdutoById);

module.exports = router;