-- $ brew services list
-- $ brew services restart po

-- GETTING ALL THE DATA FROM TABLE
-- const allTodos = await pool.query('SELECT * FROM todo');

-- GETTTING A SPECIFIC ITEM FROM TABLE
-- const specificTodo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);


-- CREATING NEW ITEM IN TABLE
-- const newTodo = await pool.query(`INSERT INTO todo(description) VALUES($1) RETURNING *`, [description]);


-- UPDATING A SPECIFIC ITEM IN TABLE
-- const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);


-- DELETING A SPECIFIC ITEM IN TABLE
-- const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);


-- 
-- log into postgres by typing in terming: psql r
-- to quit psql type: \q
-- \l list all db in postgresql
-- \c move inside a database: \c nameofDatabase

-- \dt show table in db

-- create database called trendingcoins_practice
CREATE DATABASE trendingcoins_practice;

-- create table called top7coins in database trendingcoins_practice
CREATE TABLE cryptoToDo(
    trending_id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

    -- symbol,
    -- market_cap_rank,
    -- large,
    -- price_btc