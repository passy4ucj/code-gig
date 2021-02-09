const { Sequelize } = require('sequelize')


const db = new Sequelize('codegig', 'postgres', 'ojinnaka@1', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = db


