// import Sequelize from "sequelize";
// import connection from "../config/sequelize-config.js";

// // Criando o model (tabela no banco)
// const Cliente = connection.define('clientes' ,{
//     //Colunas da tabela
//     nome: {
//         // Tipo de dados
//         type: Sequelize.STRING,
//         //  Permite vazio?
//         allowNull: false,
//     },
//     cpf: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     endereco: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },    
// });
// Cliente.sync({force: false})  // Cria a tabela somente se ela ainda não existir 

// export default Cliente;