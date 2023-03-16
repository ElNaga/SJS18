const mongoose = require('mongoose')

const Menu = mongoose.model(
    'menu',
    {

            product: String,
            price: Number,
            category: String,
            description: String,
            linkDes: String,
            flag: Boolean
    },
    'menu'
);

const create = async (data) => {
    let m = new Menu(data);
    return m.save();
};

const getAll = async () => {
    return Menu.find({})
}

const getOne = async (id) => {
    return Menu.findOne({_id: id})
}
const getCategory = async (cate) => {
    return Menu.findOne({category: cate})
}
const updateOne = async (id,data) => {
    return Menu.updateOne({_id: id}, data)
}
const updatePartial = async (id,data) => {
    return Menu.updateOne({_id: id}, data)
}

module.exports = {
    create,
    getAll,
    getCategory,
    getOne,
    updateOne,
    updatePartial
}