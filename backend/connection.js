'use strict';

// pgpool config

const Pool = require('pg').Pool;

export const pool = new Pool({
    user: 'postges',
    host: 'localhost',
    database: 'jnotes',
    password: 'password',
    port: 5432,
});


// module.exports = {
//     pool,
// };

