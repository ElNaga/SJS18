const express = require('express');
const mongoose = require('mongoose');

const pages = require("./handlers/pages");
const callbacks = require("./handlers/callbacks");
const linkString = require('./hidden_wd/wd_var');
//const pages = require("./handlers/callbacks");

const dsn = linkString.linkString();

mongoose.connect (
    dsn,
    err => {
        if (err) return console.log(err);
        console.log('Connected to DB!')
    }
);

const app = express();

app.set('view engine' ,'ejs');
app.use(express.urlencoded( {extended: true}));


app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));

app.get('/', pages.main); // all blogposts
app.get('/blogpost/:id', pages.singleBlogpost); // single blogpost
app.get('/form', pages.formAdd); // form to create new blogpost
app.get('/form/:id', pages.formEdit); // form to edit a blogpost

app.post('/callback/post', callbacks.create); // creates enw blogpost
app.post('/callback/post/:id', callbacks.edit); // edits existing blogpost
app.post('/callback/remove/:id', callbacks.remove); // detels a blogpost

app.listen(10000, err => {  
    if (err) return console.log(err);
    console.log('Server succesfully started on port: 10000');
});