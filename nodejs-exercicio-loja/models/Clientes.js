import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Clientes = connection.define('Clientes', {
    nome:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})
Clientes.sync({force:true});

export default Clientes;