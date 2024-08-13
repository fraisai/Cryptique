const { readFileSync } = require('fs');
// import { parse } from 'csv-parse/sync';
const { Parser } = require('json2csv');

export const parseCoinGeckoCsv = async () => {
  return await Parser.parse(readFileSync('../data/coinGeckoCoin.csv', 'utf8'), {
    columns: true,
    delimiter: ',',
  });
};
