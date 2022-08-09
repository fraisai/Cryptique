// connecting my database to the server

const Pool = require('pg').Pool;

const pool = new Pool(
    {
        user: 'r',
        password: 'Xiuhan292',
        host:'localhost', // always local host
        port: 5432, // always automatically run from port 5432
        database: 'trendingcoins_practice' // the database you created in database.sql file (line 15)
    }
);

module.exports = pool;
