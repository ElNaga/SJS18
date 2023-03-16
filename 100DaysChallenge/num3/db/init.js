const mongoose = require('mongoose')


const initDB = () => {
    // const dsn = 'mongodb://mongo:27017/somamenu';
    const dsn = 'mongodb+srv://elnaga:Kuchki_3site@cluster0.rvgmx.mongodb.net/baza1?retryWrites=true&w=majority';
mongoose.connect (
    dsn,
    err => {
        if (err) return console.log(err);
        console.log('Connected to DB!')
    }
);

}

module.exports  = {
    initDB
}