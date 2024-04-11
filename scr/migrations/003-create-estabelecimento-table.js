const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createEstabelecimentoTable() {
    try{
        const connection = await mysql.createConnection(databaseConfig);

        await connection.query(`USE ${databaseConfig.database}`)

        await connection.query(`CREATE TABLE IF NOT EXISTS estabelecimento (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(250) NOT NULL,
            endereco VARCHAR(50) NOT NULL,
            inscricaoMunicipal VARCHAR(11) NOT NULL,
            cnpj VARCHAR(14) NOT NULL
        )`);

        await connection.end();

        console.log("Table estabelecimento created!");
    }catch(error) {
        console.log(`Error creating table estabelecimento: ${error}`);
    }
}

createEstabelecimentoTable();