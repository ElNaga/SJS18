const mongoose = require('mongoose')

const Movie = mongoose.model(
    'movie',
    {
        "name": String,
        "year": String
    },
    'movie'
);

const create = async (data) => {
    let m = new Movie(data);
    return m.save();
};

const getAll = async () => {
    return Movie.find({})
}

const getOne = async (id) => {
    return Movie.findOne({_id: id})
}
const updateOne = async (id,data) => {
    return Movie.updateOne({_id: id}, data)
}
const updatePartial = async (id,data) => {
    return Movie.updateOne({_id: id}, data)
}