#! /usr/bin/env bash
psql -d <elephantSQL_URL> -f db-init.sql

# Run psql -d <url from elephantSQL> -f db-init.sql. This will open the connection to elephantsql database and execute the SQL statements that will create tables in your database and populate them with rows of data - wait til it finishes

