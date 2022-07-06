// npm install express - instalira modulexpress

//import package express
const express = require('express');
//const { home,calculator } = require('./handlers');
const handlers = require('./handlers')

//create new express app
const app = express();


//activate the JSON  (req.body) middleware/plugin
app.use(express.json())

//add new route/endpoint to the app

// app.get('/calc/:operation', (req,res) => {

//     console.log(req.params.operation); //go pecati URL parametarot operation od /calc/:operation
//     console.log(req.query)
//     calculator(req,res)
// }); // http method GET

app.get('/calc/:operation', handlers.calculator)
app.post('/calc/:operation', handlers.calculator2)
app.get('/about', (req,res) => {
    res.send('about')
});

// start the application
app.listen(8080, (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Server successfully started');
})

/*

REST METHODS

    GET
    POST
    PUT
    PATCH
    DELETE
*/