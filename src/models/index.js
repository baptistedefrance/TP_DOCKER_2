// models/index.js

const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

// Utilisez cette instance pour MySQL
const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.hostname,
    port: dbConfig.port,
    dialect: dbConfig.dialect
});

// Assurez-vous que cette section est commentée ou supprimée
/*
const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});
*/

module.exports = {
    instance,
    books: require('./books')(instance)
};
