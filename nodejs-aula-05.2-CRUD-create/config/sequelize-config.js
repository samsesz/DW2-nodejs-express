//  Importando o Sequelize
import Sequelize from "sequelize";

//  Criando os dados de conexão com o bando de dados
const connection = new Sequelize ({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    // comente a linha abaixo na primeira execução do projeto
    database: "sistemaLoja",
    timezone: "-03:00"
})
export default connection;