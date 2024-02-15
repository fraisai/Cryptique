export const create_meta_table = `CREATE TABLE IF NOT EXISTS meta (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL, 
    symbol VARCHAR(255) UNIQUE NOT NULL,
    _desc TEXT DEFAULT '',
    homepage_url VARCHAR(255) DEFAULT '',
    img VARCHAR(255) DEFAULT '',
    jsonb_meta jsonb
);`;