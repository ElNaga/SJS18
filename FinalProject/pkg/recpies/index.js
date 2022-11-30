const mongoose = require('mongoose');

const Recipe = mongoose.model(
    'recipe',
    {
        author_id: { type: String, required: true },
        title: { type: String, required: true },
        category: { type: String, required: true },
        preparationTime: { type: Number, required: true }, //minutes
        numPeople: { type: Number, required: true },
        shortDesc: { type: String, required: true },
        recipe: { type: String, required: true },
        dateCreated: {type: Date, default: Date.now},
        imgLink: { type: String, required: true },
        numberFavorited: { type: Number, required: true }
    },
    'recipes'
);

const create = (data) => {
    let r = new Recipe(data);
    return r.save();
}

const getByDate = async () => {
    return Recipe.find({}).sort({published_on: -1});
}

const getByFavorited = async () => {
    return Recipe.find({}).sort({numberFavorited: -1});
}

const getByCategory = async (data) => {
    return Recipe.find({category: data});
}

const getOne = async (id) => {
    return Recipe.find({_id: id});
}


const update = async (id, uid, data) => {
    return Recipe.updateOne({_id: id, author_id: uid}, data);
};

const remove = async (id, uid) => {
    return Recipe.remove({_id: id, author_id: uid});
};



module.exports = {
    create,
    getByDate,
    getByFavorited,
    getByCategory,
    getOne,
    update,
    remove
}