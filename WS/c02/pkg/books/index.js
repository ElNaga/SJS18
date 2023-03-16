const mongoose = require('mongoose');

const Book = mongoose.model(
    'books',
    {
        title: String,
        author: [
            String
        ],
        genre: [
            String
        ],
        description: String,
        characters: [
            String,
        ],
        publisher: String,
        page_num: Number,
        publish_year: Date

    },
    'books'
);

const create = async (data) => {
    let book = new Book(data);
    return book.save();
};

const getAll = async () => {
    return Book.find({});
};

const getOne = async (id) => {
    return Book.findOne({_id: id});
};

const getOneCharacters = async (id) => {
    return Book.findOne({_id: id},{'characters': 1});
};

const getOneAuthors = async (id) => {
    return Book.findOne({_id: id},{'author': 1});
};

const getOneGenres = async (id) => {
    return Book.findOne({_id: id},{'genre': 1});
};

const updateOne = async (id, data) => {
    return Book.updateOne({_id: id}, data);
};

const updatePartial = async (id, data) => {
    return Book.updateOne({_id: id}, data);
};

const remove = async (id) => {
    return Book.deleteOne({_id: id});
};

module.exports = {
    create,
    getAll,
    getOne,
    getOneGenres,
    getOneAuthors,
    getOneCharacters,
    updateOne,
    updatePartial,
    remove
};