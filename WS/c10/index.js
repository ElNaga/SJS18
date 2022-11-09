const apiInfo = require('./API.json');
const express = require('express');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const api = express();

api.post('/api/v1/mailer', async (req, res) => {
    // code goes here

    try {
        
        const mailgun = new Mailgun(formData);
        const mg = mailgun.client ({
            username: 'api',
            key: apiInfo.api_key
        });
    
        let out = await mg.messages.create(apiInfo.domain ,{
            from: 'aleksandar.ilijevski.feit@gmail.com',
            to: 'aleksandar.ilijevski.feit@gmail.com',
            subject: 'Test is this2',
            html: '<h1>Test titile</h1> <p>This is post tag a2222 u</p>'
        })
    
        console.log(out);
        res.send('ok');
    }
    
    catch (err) {
        if (err) {
            console.log(err)
        }
    }})

    
    api.listen(10000, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Service started on port 10000!')
    });

// domashno:

//1.  Separacija vo handler; pkg za apikey i domain;
//2. namesto from to tuku zemaj gi od req.body!!!
// biblioteki 'node input validator' ili joy