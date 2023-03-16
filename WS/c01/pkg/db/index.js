const mongoose = require('mongoose');


const init = () => {
    const dsn = '';
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