const express = require("express");
const usuarioRouter = require("./router/usuarioRouter.js");
const estabelecimentoRouter = require("./router/estabelecimentoRouter.js");
const pedidoRouter = require("./router/pedidoRouter.js");
const produtoRouter = require("./router/produtoRouter.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3333;

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello World<h1>`);
});

app.use(bodyParser.json("application/json"));
app.use(cors());
app.use("/api", usuarioRouter);
app.use("/api", estabelecimentoRouter);
app.use("/api", pedidoRouter);
app.use("/api", produtoRouter);

app.listen(PORT, () => {
  console.log("Servidor Online!");
});
