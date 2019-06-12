const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'jnotesdb01.cbkrs8dtmtem.us-east-1.rds.amazonaws.com',
    database: 'jnotesdb',
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

// delete a note
const deleteNote = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM notes WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).send(`Note ${id} deleted`)
    })
};


// edit a note
const editNote = (request, response) => {
  const id = parseInt(request.params.id);
  const {title, noteText } = request.body;
  pool.query(
      'UPDATE notes SET title = $1, noteText=$2 WHERE id =$3', [title,noteText,id],
      (error, results) => {
          if (error) {
              throw error
          }
          response.status(200).send(`note ${id} modified`)
      }
  )
};
module.exports= {
    getUsers,
    getNotes,
    createNote,
    deleteNote,

    editNote,
};