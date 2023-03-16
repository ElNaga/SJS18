const apiInfo = require('./API.json');
const express = require('express');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const { Validator } = require('node-input-validator');
const { mailing } = require('./handlers/mailing');

const api = express();
api.use(express.json());


api.post('/api/v1/mailer', mailing)
// api.post('/api/v1/mailer', async (req, res) => {
//     // code goes here

//     try {

//         const mailgun = new Mailgun(formData);

//         const v = new Validator(req.body, {
//             "from": 'required|email',
//             "to": 'required|email',
//             "subject": 'required|string',
//             "html": 'string'
//         });
//         console.log('this is request: ', req.body)
//         console.log(v);
//         const matched = await v.check();

//         if (!matched) {
//             res.status(400)
//             console.log('this', v.errors);
//         } else {
//             const mg = mailgun.client({
//                 username: 'api',
//                 key: apiInfo.api_key
//             });
//             let out = await mg.messages.create(apiInfo.domain,
//                 req.body
//             )

//             console.log(out);
//             return res.send('ok');
//         }
//     }

//     catch (err) {
//         if (err) {
//             console.log(err)
//         }
//     }
// });


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