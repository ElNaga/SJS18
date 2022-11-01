

const express = require('express');
const {expressjwt: ejwt} = require('express-jwt');
const db = require('./pkg/db')
const config = require('./pkg/config');
// const { application } = require('express');
// const auth = require("./pkg/auth)")
const auth = require('./handlers/auth')
// const recipe = require("./pkg/recipe")
const recipe = require("./handlers/recipe")




const api = express();
api.use(express.json());

api.use(ejwt({
    algorithms: ['HS256'],
    secret: config.get('service').jwt_secret
}).unless({
    path: [
        '/login',
        '/create-account'
    ]
}));

db.init(); //connect to DB
// routes:
api.post("/", async (rq,rs) => {return rs.send('ok token')} );
api.post("/login",  auth.login);
// api.get("/login",  auth.login); //debuging artefact
api.post("/create-account",auth.create);

api.post("/recipe", recipe.addRecipe);
api.get("/recipe/",recipe.getAll);
api.get("/recipe/:id",recipe.getOneById);
api.put("/recipe/:id",recipe.updateThis);
api.delete("/recipe/:id",recipe.deleteOne);

api.listen(config.get("service").port, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('Service started on port', config.get("service").port)
})