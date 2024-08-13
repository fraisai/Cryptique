
// connecting my database to the server
const { Client } = require('pg');
const Pool = require('pg').Pool;
const dotenv = require('dotenv')
dotenv.config()
const { create_watchlist_sql, seed_watchlist_card } = require('../sql-scripts/create-watchlist_card-table');

const pool = new Pool({
    connectionString: process.env.ELEPHANT_SQL_URL
})
// TS type: pool.query(text: string, values?: any[]) => Promise<pg.Result>
// https://node-postgres.com/guides/project-structure

// USERS TABLE
pool.query(`CREATE TABLE IF NOT EXISTS test_users (id SERIAL PRIMARY KEY, username VARCHAR(255) UNIQUE NOT NULL, email VARCHAR(255) UNIQUE NOT NULL)`, 
(err, result) => {
  if (err) console.error('sqlModel.js: Error creating the users table', err);
  else console.log('sqlModel.js: Users table created successfully:');
});

// // Seed the table with initial data
// pool.query(`INSERT INTO test_users (username, email) VALUES ('user1', 'user1@example.com'), ('user2', 'user2@example.com')`, 
// (err, result) => {
//   if (err) console.error('Error seeding the users table', err);
//   else console.log('Data seeded successfully');
// });


pool.query(create_watchlist_sql, (err, result) => {
  if (err) console.log('sqlModel.js: Error in creating watchlist_card Table', err);
  else console.log('sqlModel.js:  watchlist_card table successfully created');
});

// // SEED watchlist_card table
// pool.query(seed_watchlist_card, ['memecoin', 'Memecoin', 'MEME', 0.11109762041647116, 30603, 9550, 0.026755648199 ],
// (err, result) => {
//   if (err) console.error('Error seeding the watchlist_card table', err);
//   else console.log('Data seeded successfully');
// });


pool.query('SELECT * FROM watchlist_card;', (err, result) => {
  if (err) console.error('sqlModel.js: Error selecting the watchlist_card table', err);
  else console.log('sqlModel.js: watchlist_card data selected successfully');
})

module.exports = pool;
