const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool ({
    database: 'budget',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', ()=>{
    console.log('Pool connected!');
});

pool.on('error', ()=>{
    console.log('DB Error',err);
});

module.exports = pool;