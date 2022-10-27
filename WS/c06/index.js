// get /authors - ги дава сите автору
// get /posts - ги дава сите постови
// get /posts/me - ги дава сите ваши постови
// get /posts/:handle @bojang - ги дава сите постови на одреден корисник (bojang)

// post /posts - креира нов пост
// pot /posts/:id - менува пост
// delete /post/id - брише пост

// post
// {
//     _id: ...,
//     author_id: ...
//     content: (...),
//     published_on: (...)
// }

// author
// {
//     _id: (...),
//     handle: (...),
//     full_name: (...)
// }
const {get} = require('./pkg/config/index')
const {expressjwt: jwt} = require('express-jwt');
const mongoose = require('mongoose')
const express = require('express');
const db = require('./pkg/db');
const authors = require('./handlers/authorHandlers');
const posts = require('./handlers/postHandlers');

const api = express();
api.use(express.json());




api.use(jwt({
    algorithms: ['HS256'],
    secret: get('service').jwt_secret
}));

// const User = mongoose.model(
//     'user',
//     {
//         password: String,
//         author_id: String,
//         full_name: String,
//         email: String,
//     },
//     'users'
// );
db.init(); // this initializes the DB


// const getUser = async () => {
//     await console.log(User.find({}))
//     return User.find({});
// }


api.get("/", (req,res) => {
    res.send("Home")
})
api.get("/authors", authors.getAllAuthors)

api.get("/posts", posts.getAllPosts)

api.get("/posts/me", posts.getPostsFromMe)

api.get("/posts/:handle", posts.getPostsFromAuthor)



api.post("/posts", posts.create)

api.put("/posts/:id", posts.update)

api.delete("/post/:id", posts.remove)


api.listen(get("service").port , err => {
    if (err) {
        return console.log(err);
    }
    console.log(`Service auth succesfully started on port ${get("service").port}`)
});