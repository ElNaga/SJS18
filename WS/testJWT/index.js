const express = require('express')
const jwt = require('jsonwebtoken')
const {expressjwt: jwte} = require('express-jwt')

const api = express();
api.use(express.json());

api.use(jwte({
    algorithms: ['HS256'],
    secret: 'secret'
}).unless({
    path: [
    ]
}));

let payload = {
    uid: "6345894357",
    email: "email@mail.com",
    full_name: "FullName"
};
let token = jwt.sign(payload, 'secret')

var decoded = jwt.verify(token, 'secret');
console.log(decoded)
console.log(decoded.uid)
console.log(decoded.email)

// api.listen(10000, err => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Service auth succesfully started')
// });