require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const {expressjwt: jwt} = require('express-jwt');
const storage = require('./handlers/storage');

const api = express();
api.use(fileUpload());
// api.use(fileUpload({limits: { fileSize: 10 * 1024 * 1024 }})); // posle kje proverime if(!truncated) mada nema potreba...

api.post('/api/v1/storage', storage.upload);
api.get('/api/v1/storage/:file', storage.download);

api.listen(process.env.PORT, err => {
    if (err) {
        return console.error(err)
    }
    console.log(`Server successfully started on port ${process.env.PORT}`);
});