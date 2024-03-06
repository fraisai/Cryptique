"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool, Client, Result } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const create_meta_table_1 = require("../sql-scripts/create-meta-table");
const pool = new Pool({
    connectionString: process.env.ELEPHANT_SQL_URL
});
// create meta table
pool.query(create_meta_table_1.create_meta_table, (err, result) => {
    if (err)
        console.log('Error in creating meta Table', err);
    else
        console.log('meta table successfully created');
});
pool.query('SELECT * FROM test_meta;', (err, result) => {
    if (err)
        console.error('Error selecting the meta table', err);
    else
        console.log('meta data selected successfully');
});
module.exports = pool;
//# sourceMappingURL=sqlConnection.js.map