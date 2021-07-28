module.exports = {
    dialect: 'mysql',
    host: 'db',
    // username: process.env.DATABASE_USERNAME,
    // password: process.env.DATABASE_PASSWORD,
    // database: process.env.DATABASE_NAME,
    username: 'root',
    password: 'secret',
    database: 'todolist',
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true
    }
}