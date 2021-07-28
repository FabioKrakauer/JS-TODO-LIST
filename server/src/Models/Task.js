const { Model, DataTypes } = require('sequelize')

class Task extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            status: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'tasks'
        })
    }
}
module.exports = Task