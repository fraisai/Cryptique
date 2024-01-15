// connecting my database to the server

const Pool = require('pg').Pool;
const dotenv = require('dotenv')
dotenv.config()
// postgres://zrnmvnsw:L9gWvTeWT2iEnalhKrggUVbv3zZyDzVW@batyr.db.elephantsql.com/zrnmvnsw


const pool = new Pool(
    {
        user: process.env.ELEPHANT_SQL_USER,
        password: process.env.ELEPHANT_SQL_PW,
        host: process.env.ELEPHANT_SQL_HOST, 
        port: 5432, // always automatically run from port 5432
        database: 'cryptique' // the database you created in database.sql file (line 15)
    }
);

module.exports = pool;
