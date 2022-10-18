const mongoose = require('mongoose')


const initDB = () => {
    const dsn = 'mongodb://localhost:27017/somamenu';
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