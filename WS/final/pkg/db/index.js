const config = require('../config')
const mongoose = require('mongoose');


const init = () => {
    // const dsn = 'mongodb+srv://elnaga:Kuchki_3site@cluster0.rvgmx.mongodb.net/baza1?retryWrites=true&w=majority';
    const url = config.get('db').url
    console.log(url)
    const password = config.get('db').password
    const username = config.get('db').username
    const dbName = config.get('db').dbName
    const dsn = `mongodb+srv://${username}:${password}@${url}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect (
    dsn,
    err => {
        if (err) return console.log(err);
        console.log('Connected to DB!')
    }
);
}

module.exports  = {
    init
}