const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://elnaga:Kuchki_3site@cluster0.rvgmx.mongodb.net/baza1?retryWrites=true&w=majority';

const connect = (connectionString) => {
    return new Promise((success, fail) => {
        mongoose.connect(connectionString, err => {
            if (err) return fail(err);
            console.log('Connected successfully to DB!');
            return success();
        });
    })
};

const Studenti = mongoose.model(
    'studenti', // model name
    {
        ime : String,
        prezime : String,
        prosek : Number,
        lokacija: {
            grad : String,
            drzava : String
        }
    },
    'studenti' // collection name
);

connect(connectionString)
.then(() => {
            console.log('first then');
            return Studenti.find();
        })
.then( (res) => {
    console.log(res)
}
)