const Sequelize = require('sequelize');
const dBConfig = require('../config/database.config');

const connection = new Sequelize(dBConfig);

module.exports = connection;