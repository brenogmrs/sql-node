module.exports = {
    dialect: 'mariadb',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'sqlnode',
    dialectOptions: {
        useUTC: false,
        timezone: 'Etc/GMT0',
    },
    define: {
        timestamps: true,
        underscored: true,
    }
}