
export const filterMetaTable = (coin_query: string) => `SELECT name FROM meta WHERE name ILIKE '${coin_query}%' OR symbol ILIKE '${coin_query}%';`;