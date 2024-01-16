// connecting my database to the server
const { ErrorEvent } = require('pg')
const Pool = require('pg').Pool;
const dotenv = require('dotenv')
dotenv.config()

// LOCAL DB:
// const pool = new Pool(
//     {
//         user: process.env.ELEPHANT_SQL_USER,
//         password: process.env.ELEPHANT_SQL_PW,
//         host: process.env.ELEPHANT_SQL_HOST, 
//         port: 5432, // always automatically run from port 5432
//         database: 'cryptique', // the database you created in database.sql file (line 15)
//         listen_addresses: '*',
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// );

const dbConfig = {
    connectionString: process.env.ELEPHANT_SQL_URL
}

const pool = new Pool(dbConfig);

module.exports = pool;
