const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jnotes',
    password: 'password',
    port: 5432,
});
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};




const getNotes = (request, response) => {
    pool.query('SELECT * FROM notes ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

// post a new note
const createNote = (request, response) => {
    const { title, noteText } = request.body;
    pool.query('INSERT INTO notes (title, noteText) VALUES ($1, $2)', [title, noteText], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`${request.body} added to database`)

    })
};

module.exports= {
    getUsers,
    getNotes,
    createNote,
};