const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: '2353',
    host: 'localhost',
    port: 5432,
    database: 'bank'
});
module.exports = pool;
