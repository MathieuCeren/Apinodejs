module.exports = require('knex')({
    client: 'pg',
    connection: {
        host: 'equipe-02.cqf0cfj75jd4.eu-west-3.rds.amazonaws.com',
        user: 'student',
        password: '4vqzw94DCpJKZBem22YD75KgGD',
        database: 'postgres'
    }
});
