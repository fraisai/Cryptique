
// connecting my database to the server
const { Client } = require('pg')
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

// const dbConfig = {
//     connectionString: process.env.ELEPHANT_SQL_URL,
//     user: 'zrnmvnsw',
//     database: 'cryptique',
//     host: 'batyr.db.elephantsql.com'

// }

const pool = new Pool({
    connectionString: process.env.ELEPHANT_SQL_URL
})

// Create the users table if it doesn't exist
pool.query(`
  CREATE TABLE IF NOT EXISTS test_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  )
`, (err, result) => {
  if (err) {
    console.error('Error creating the users table', err);
  } else {
    console.log('Users table created successfully:', result);
  }
});

// Seed the table with initial data
pool.query(`
  INSERT INTO test_users (username, email)
  VALUES
    ('user1', 'user1@example.com'),
    ('user2', 'user2@example.com')
`, (err, result) => {
  if (err) {
    console.error('Error seeding the users table', err);
  } else {
    console.log(result)
    console.log('Data seeded successfully');
  }
});

pool.query(`CREATE TABLE IF NOT EXISTS watchlist_card(
  _id VARCHAR(255) PRIMARY KEY, 
  _name VARCHAR(255) UNIQUE NOT NULL, 
  symbol VARCHAR(255) UNIQUE NOT NULL,
  price NUMERIC(12, 5) NOT NULL,
  percent_change NUMERIC(10, 4),
  equity NUMERIC(12, 5) DEFAULT 0,
  shares NUMERIC(12, 5) DEFAULT 0,
)`, (err, result) => {
  if (err) console.log('Error in creating watchlist_card Table', err);
  else {
    console.log("watchlist_card contents:", result.rows[0]);
    console.log('watchlist_card table successfully created');
  }
});


pool.query('SELECT * FROM watchlist_card;', (err, result) => {
  if (err) {
    console.error('Error selecting the users table', err);
  } else {
    console.log(result.rows[0])
    console.log('Data selected successfully');
  }
})

module.exports = pool;