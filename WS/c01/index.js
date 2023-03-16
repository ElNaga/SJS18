// const express = require('express');
// const mongoose = require('mongoose');


// const Movies = mongoose.model (
//     'movies',
//     {
//         name: String,
//         year: Number,
//     },
//     'movies'
// );

// mongoose.connect (
//     'mongodb+srv://elnaga:Kuchki_3site@cluster0.rvgmx.mongodb.net/baza1?retryWrites=true&w=majority',
//     err => {
//         if (err) return console.log(err);
//         console.log('Connected to DB!')
//     }
// );



// const app = express();

// // const getAll = async () => {
// //     return 
// // };

// const main = async (req, res) => {
//     try {
//         let data = await Movies.find({})
//         return res.send({data});
//     } catch (err) {
//         console.log(err);
//         return res.status(500).send('Internal Server Error');
//     }
// };
// app.get('/',main)

// app.listen(10000, err => {  
//     if (err) return console.log(err);
//     console.log('Server succesfully started on port: 10000');
// });


const express = require('express')
const movies = require('./handlers/movies')

const app = express();

app.use(express.json());


app.get('/movies', movies.getAll)
app.get('/movies/:id', movies.getOne)
app.post('/movies/:id', movies.create)
app.put('/movies/:id', movies.update)
app.patch('/movies/:id', movies.partialUpdate)
app.delete('/movies/:id', movies.remove)

app.listen(10000, err => {
    if (err) return console.log(err);
    console.log('Service started succesfully on port: 10000')
})