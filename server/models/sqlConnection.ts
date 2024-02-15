const { Pool, Client, Result } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
import { create_meta_table } from "../sql-scripts/create-meta-table";
const pool = new Pool({
    connectionString: process.env.ELEPHANT_SQL_URL
});

// create meta table
pool.query(create_meta_table, (err: Error, result: typeof Result) => {
    if (err) console.log('Error in creating meta Table', err);
    else console.log('meta table successfully created', result);
})

pool.query('SELECT * FROM test_meta;', (err: Error, result: typeof Result) => {
    if (err) console.error('Error selecting the meta table', err);
    else console.log('meta data selected successfully', result);
  })
  
  

module.exports = pool;