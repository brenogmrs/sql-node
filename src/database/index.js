const Sequelize = require('sequelize');

const dBConfig = require('../config/database.config');

const User = require('../models/User');
const Address = require('../models/Address');


const connection = new Sequelize(dBConfig);

User.init(connection);
Address.init(connection);

Address.associate(connection.models);
User.associate(connection.models);



module.exports = connection;