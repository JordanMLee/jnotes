/* Created by Jordan Lee */
/* Entry point of jnotes application */


// core modules
// var path = require('path');

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;

// import queries library
// const db = ('./userAdapter');

const db = require(`./queries`);
// set static path
// app.use(express.static(path.join(__dirname, 'public')))

// Use cors
app.use(cors());



app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
);

app.get('/', db.getNotes);

app.get('/users', db.getUsers);

app.post('/', db.createNote);

app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
});


