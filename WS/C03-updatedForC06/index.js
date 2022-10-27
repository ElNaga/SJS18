const express = require('express');
const {expressjwt: jwt} = require('express-jwt');
// const mongoose = require('mongoose');
const auth = require('./handlers/auth');
const db = require('./pkg/db');

db.init();
const api = express();
api.use(express.json());
api.use(jwt({
    algorithms: ['HS256'],
    secret: 'secret'
}).unless({
    path: [
        '/api/v1/auth/create-account',
        '/api/v1/auth/login',
        '/api/v1/auth/forgot-password',
        '/api/v1/auth/reset-password'
    ]
}));

api.post('/api/v1/auth/create-account', auth.create);
api.post('/api/v1/auth/login', auth.login);

api.post('/api/v1/auth/forgot-password', auth.forgotPassword);
api.post('/api/v1/auth/reset-password', auth.resetPassword);

api.post('/api/v1/auth/validate-token', auth.validate);

api.listen(10001, err => {
    if (err) {
        return console.log(err);
    }
    console.log('Service auth succesfully started on port 10001')
});