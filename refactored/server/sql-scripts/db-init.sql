SET client_encoding = 'UTF8';

-- create crypto meta data table
CREATE TABLE meta(
    _id TEXT PRIMARY KEY,
    crypt_name TEXT UNIQUE DEFAULT '',
    symbol VARCHAR(255) DEFAULT '',
    crypt_desc TEXT DEFAULT '',
    img TEXT DEFAULT ''
);

-- create table for client data
CREATE TABLE user(
    _id SERIAL PRIMARY KEY,
    _first VARCHAR(255) NOT NULL,
    _last VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    wish_list_id TEXT DEFAULT ''
);

CREATE TABLE investments(
    _id SERIAL PRIMARY KEY,
    user_id TEXT REFERENCES user(_id),
    crypt_id INTEGER REFERENCES meta(_id)
)