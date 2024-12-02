const express = require("express");
const router = express.Router();
const estabelecimentoController = require("../controller/estabelecimentoController.js");

router.get("/estabelecimento", estabelecimentoController.getAllEstabelecimento);
router.post("/estabelecimento", estabelecimentoController.createEstabelecimento);
router.put("/estabelecimento/:id", estabelecimentoController.updateEstabelecimento);
router.delete("/estabelecimento/:id", estabelecimentoController.deleteEstabelecimento);
router.get("/estabelecimento/:id", estabelecimentoController.getEstabelecimentoById);
router.post("/estabelecimento/login", estabelecimentoController.loginEstabelecimento);

module.exports = router;