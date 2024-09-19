const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');


const Evento = sequelize.define('eventos', {

    nome: {
        type:DataTypes.STRING,
        allowNull:false
    },
    data:{
        type:DataTypes.DATE,
        allowNull:false
    },
    localidade:{
        type:DataTypes.STRING,
        allowNull:false
    }

});

module.exports = Evento;