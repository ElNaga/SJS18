const config = require('../../pkg/config')
const express = require('express');
const db = require("../../pkg/db")
const {expressjwt: jwt} = require('express-jwt');


db.init(); // initialize connection to DB

const api = express();
api.use(express.json()); // use json files in the api??

api.use(jwt({
    algorithms: ['HS256'],
    secret: config.get('security').jwt_secret
}).unless({
    // path not needed for authetication

    // 3. api get recipieByDateOfCreation

    // 4. api get recipeByFavorites

    // 5. api get recipeByCategory  
}))

// 1. api Create recipe

// 2. api Update recipie

// 3. api get recipieByDateOfCreation

// 4. api get recipeByFavorites

// 5. api get recipeByCategory

// 6. api remove recipe


const PORT = process.env.PORT || config.get("services").recipes.port;

api.listen( PORT, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log(`Service [recipes] started on port ${PORT}`)
} )