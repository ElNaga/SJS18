const express = require('express');
const books = require('./handlers/books');
const db = require('./pkg/db');

db.init();

const app = express();

app.use(express.json());

app.get('/books', books.getAll);
app.get('/books/:id', books.getOne);
app.get('/books/:id/characters', books.getOneCharacters)
app.get('/books/:id/authors', books.getOneAuthors)
app.get('/books/:id/genres', books.getOneGenres)

app.post('/books', books.create);

// app.put('books/:id', books.updateOne);
// app.patch('/books/:id', books.updatePartial);
// app.delete('/books/:id', books.remove);


app.listen(10000, err => {
    if(err){
        return console.log('Could not start service');
    }
    console.log('Service started successfully on port 10000');
});