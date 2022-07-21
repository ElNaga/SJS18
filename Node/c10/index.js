const express = require('express');
const handlers = require('./handlers');

let app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
  res.render('index'); //views/index.ejs
});

app.get('/podatoci/:ime', (req, res) => {
    let data = {
        ime: req.params.ime,
        studenti: [
            {ime: 'Pero', prezime: 'Perovski'},
            {ime: 'Janko', prezime: 'Jankovski'},
            {ime: 'Zlatko', prezime: 'Zlatkovski'},
            {ime: 'Petko', prezime: 'Petkovski'},
            {ime: 'Stanko', prezime: 'Stankovski'},
            {ime: 'Ivan', prezime: 'Ivanovski'}
        ]
    };
    res.render('podatoci', data); //views/podatoci.ejs
  });

app.get('/formular', (req,res) => {
    res.render('formular') //views/formular.ejs
});

app.post('/formular-rezultat', (req,res) => {
    //res.render('formular') //views/formular.ejs
    //res.send(req.body);

    let data = {
        ime: req.body.ime,
        prezime: req.body.prezime
    };
    res.render('formular_rezultat',data)
});


app.get('/calculator', (req,res) => {
    res.render('calculator');
    
});

app.post('/calculator-result', async (req, res) => {
    try {
        let result = {
            rezultat: handlers.calculator(req.body)
        }
        res.render('calculator-result',result);
    } catch (error) {
        console.log(error);
    }
    
});

app.listen(10000, err => {
    if (err) return console.log(err);
    console.log('Server started on port 10000');
}
    );