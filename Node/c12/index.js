const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://elnaga:Kuchki_3site@cluster0.rvgmx.mongodb.net/?retryWrites=true&w=majority';

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
        prosek : Number
    },
    'studenti' // collection name
);

// connect(connectionString)
//     .then(() => {
//         console.log('first then');
//         return Studenti.find({});
//     })
//     .then(res => {
//         console.log(res);
//         console.log('second then');
//         // let s = new Studenti({
//         //     ime: "Ivan",
//         //     prezime: "Ivanovski",
//         //     prosek: 7.3
//         // });
//         // return s.save();
//     })
//     .then(res => {
//         console.log('SAVED!', res);
//         return Studenti.updateOne({ _id: '62d9584bdece754f13a5d527'}, {prezime: 'Petrovski'});
//     })
//     .then(res => {
//         console.log('UPDATE FINISHED!', res);
//         Studenti.deleteMany()
//         return Studenti.deleteOne({ _id: '62d9584bdece754f13a5d527'});
//     })
//     .then(res => {
//         console.log('DELETED RECORD!');
//         return Studenti.find({ime: 'Ivan'}, {prezime: 1});
//     })
//     .then(res => {
//         console.log('FILTERED RESULTS:', res);
//         return Studenti.find({ prosek: {'$gte': 9} }, { prezime: 1, prosek: 1 }).sort({prezime: 1});
//     })
//     .then(res => {
//         console.log('FILTERED RESULTS 2:', res);
//     })
//     .catch(err => {
//         console.log(err);
//     });

connect(connectionString)
    .then(() => {
        console.log('first then');
        return Studenti.find({});
    })
    .then(res => {
        console.log(res);
    })
