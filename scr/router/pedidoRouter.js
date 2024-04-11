const express = require("express");
const router = express.Router();
const pedidoController = require("../controller/PedidoController.js");

router.get("/pedido", pedidoController.getAllPedido);
router.post("/pedido", pedidoController.createPedido);
router.put("/pedido/:id", pedidoController.updatePedido);
router.delete("/pedido/:id", pedidoController.deletePedido);
router.get("/pedido/:id", pedidoController.getPedidoById);

module.exports = router;