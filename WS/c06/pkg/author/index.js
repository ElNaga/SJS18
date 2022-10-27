const mongoose = require('mongoose')

const Author = mongoose.model(
    'user',
    {
        password: String,
        author_id: String,
        full_name: String,
        email: String,
    },
    'users'
);

const create = async (data) => {
    let u = new Author(data);
    return u.save()
}

const getAuthors = async () => {
    console.log(Author.find({}))
    return Author.find({});
}

module.exports = {
    create,
    getAuthors
}