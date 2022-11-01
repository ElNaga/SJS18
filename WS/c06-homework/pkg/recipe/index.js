const mongoose = require('mongoose');

const Recipe = mongoose.model(
    'recipes',
    {
        author_id: { type: String, required: true },
        name_of_recipe: { type: String, required: true },
        ingredients: [
            {
                name_of_ingrident: String,
                ammount: Number,
                ammountType: String
            }
        ],
        time_for_cooking: String,
        explanation: { type: String, required: true },
        dateAdded: {type: Date, default: Date.now},
        edited: {type: Boolean, default: false},
        editedDate: Date
    },
    'recipes'
);

const create = async (data) => {
    const r = new Recipe(data);
    return r.save();
};

const getAll = async () => {
    return Recipe.find({})
};
const getOne = async (id) => {
    return Recipe.findOne({_id: id})
};

const update = async (id, uid, data) => {
    return Recipe.updateOne({_id: id, author_id: uid}, data);
};

const remove = async (id, uid) => {
    return Recipe.remove({_id: id, author_id: uid});
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    remove
}