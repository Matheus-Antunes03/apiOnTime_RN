const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllProduto() {
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query("SELECT * FROM produto");

    await connection.end();

    return rows;
}

async function createProduto(nome, marca, preco, dataValidade, peso, idEstabelecimento) {
    const connection = await mysql.createConnection(databaseConfig);

    const insertProduto = "INSERT INTO produto(nome, marca, preco, dataValidade, peso, idEstabelecimento) VALUES(?, ?, ?, ?, ?, ?)";

    await connection.query(insertProduto, [nome, marca, preco, dataValidade, peso, idEstabelecimento]);

    await connection.end();
}

async function updateProduto(id, nome, marca, preco, dataValidade, peso) {
    const connection = await mysql.createConnection(databaseConfig);

    const updateProduto = "UPDATE produto SET nome = ?, marca = ?, preco = ?, dataValidade = ?, peso = ? WHERE id = ?";

    await connection.query(updateProduto, [nome, marca, preco, dataValidade, peso, id]);

    await connection.end();
}

async function deleteProduto(id) {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM produto WHERE id = ?", [id]);

    await connection.end();
}

async function getProdutoById(id) {
    const connection = await mysql.createConnection(databaseConfig);

    const [produto] = await connection.query("SELECT * FROM produto WHERE idEstabelecimento = ?", [id]);

    await connection.end();

    return produto;
}

module.exports = {
    getAllProduto,
    createProduto,
    updateProduto,
    deleteProduto,
    getProdutoById,
}