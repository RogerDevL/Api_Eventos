const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("eventos", "root", "root", {
  host: "localhost",
  dialect: 'mysql'
});

module.exports = sequelize;
