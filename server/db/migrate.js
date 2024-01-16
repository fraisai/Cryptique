const pool = require('../models/sqlModel.ts');

pool.on('connect', () => {
    console.log('connect to elephant sql db')
})