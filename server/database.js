const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'user',
    password: 'pass',
    host: 'localhost',
    port: 5432,
    database: 'bank'
});
module.exports = pool;
