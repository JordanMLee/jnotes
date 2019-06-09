'use strict';

// const connection = require('./connection');

import pool from './connection';
// const pool = connection.pool;

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if(error){
                throw error;
            }
            response.status(200).json(results.rows);
            });
    
};

module.exports = {
    getUsers,
}
