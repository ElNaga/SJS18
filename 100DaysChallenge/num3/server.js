const express = require('express');
const morgan = require('morgan');
const { initDB } = require("./db/init")

const api = express();
api.use(morgan('tiny'))

initDB()

api.get( '/api', (req, res) => {
    res.send('Ok API.')
} )

api.listen(8000,err => {
    if (err) return console.log(log);
    console.log("API running on port 8000!")
} )