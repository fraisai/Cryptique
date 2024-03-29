export const create_watchlist_sql = `CREATE TABLE IF NOT EXISTS investments (
    _id VARCHAR(255) PRIMARY KEY, 
    _name VARCHAR(255) UNIQUE NOT NULL, 
    symbol VARCHAR(255) UNIQUE NOT NULL,
    percent_change NUMERIC(10, 4),
    equity NUMERIC(12, 5) DEFAULT 0,
    shares NUMERIC(12, 5) DEFAULT 0,
    price NUMERIC(12, 5) NOT NULL
);`