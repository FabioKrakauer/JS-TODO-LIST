const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Task = require('../Models/Task')
const connection = new Sequelize(dbConfig)

Task.init(connection)
module.exports = connection;