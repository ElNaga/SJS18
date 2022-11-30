const config = require('../../pkg/config')
const express = require('express');
const db = require("../../pkg/db")
const {expressjwt: jwt} = require('express-jwt');
const recipes = require('./handlers/recipes')

db.init(); // initialize connection to DB

const api = express();
api.use(express.json()); // use json files in the api??

// api.use(jwt({
//     algorithms: ['HS256'],
//     secret: config.get('security').jwt_secret
// }).unless({
//     // path not needed for authetication

//     // 3. api get recipieByDateOfCreation

//     // 4. api get recipeByFavorites

//     // 5. api get recipeByCategory  
// }))

// 1. api Create recipe
api.post ('/api/v1/recipes', recipes.createRecipe);
// 2. api Update recipie
api.put ('/api/v1/recipes', recipes.updateRecipe);

// 3. api get recipieByDateOfCreation
api.get ('/api/v1/recipes', recipes.recipesByDate);
// 4. api get recipeByFavorites
api.get ('/api/v1/recipes/popular', recipes.recipesByFave);
// 5. api get recipeByCategory
api.get ('/api/v1/recipes/category', recipes.recipesByCategory);
// 6. api get 1 recipe
api.get ('/api/v1/recipes:id', recipes.recipesOne);

// 7. api remove recipe
api.delete ('/api/v1/recipes:id', recipes.deleteOne);

const PORT = process.env.PORT || config.get("services").recipes.port;

api.listen( PORT, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log(`Service [recipes] started on port ${PORT}`)
} )