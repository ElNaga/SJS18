const express = require('express');
const mongoose = require('mongoose');
const pwd = require('./pwd');
const pages = require('./handlers/pages')

mongoose.connect (
    pwd.pwd(),
    err => {
        if (err) return console.log(err);
        console.log('Connected to DB!')
    }
);



const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded( {extended: true}));
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));


app.get('/', pages.main); //main menu MENU
app.get('/:category', pages.category)
app.get('/addProduct', pages.addForm)

app.listen(10000, () => {
    console.log("Server running on port 10000!")
});