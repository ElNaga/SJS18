//const fs = require('fs');
const express = require('express');
const handlers = require('./handlers.js');

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("/home")
});
app.post("/", handlers.studenti);


app.listen(8080);


//smeni ja funkcijata taka da 