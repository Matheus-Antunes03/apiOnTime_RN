const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllEstabelecimento() {
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query("SELECT * FROM estabelecimento");

    await connection.end();

    return rows;
}

async function createEstabelecimento(nome, endereco, inscricaoMunicipal, cnpj) {
    const connection = await mysql.createConnection(databaseConfig);

    const insertEstabelecimento = "INSERT INTO estabelecimento(nome, endereco, inscricaoMunicipal, cnpj) VALUES(?, ?, ?, ?)";

    await connection.query(insertEstabelecimento, [nome, endereco, inscricaoMunicipal, cnpj]);

    await connection.end();
}

async function updateEstabelecimento(id, nome, endereco, inscricaoMunicipal, cnpj) {
    const connection = await mysql.createConnection(databaseConfig);

    const updateEstabelecimento = "UPDATE estabelecimento SET descricao = ?, quantidadeEstoque = ?, unidadeMedida = ?, valorUnidade = ? WHERE id = ?";

    await connection.query(updateEstabelecimento, [nome, endereco, inscricaoMunicipal, cnpj, id]);

    await connection.end();
}

async function deleteEstabelecimento(id) {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM estabelecimento WHERE id = ?", [id]);

    await connection.end();
}

async function getEstabelecimentoById(id) {
    const connection = await mysql.createConnection(databaseConfig);

    const [estabelecimento] = await connection.query("SELECT * FROM estabelecimento WHERE id = ?", [id]);

    await connection.end();

    return estabelecimento;
}

async function loginEstabelecimento(cnpj) {
    const connection = await mysql.createConnection(databaseConfig);

    const [estabelecimento] = await connection.query("SELECT * FROM estabelecimento WHERE cnpj = ?", [cnpj]);

    await connection.end();

    return estabelecimento;
}

module.exports = {
    getAllEstabelecimento,
    createEstabelecimento,
    updateEstabelecimento,
    deleteEstabelecimento,
    getEstabelecimentoById,
    loginEstabelecimento,
};