const Sequelize = require('sequelize');

const dBConfig = require('../config/database.config');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');


const connection = new Sequelize(dBConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);


Address.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);



module.exports = connection;