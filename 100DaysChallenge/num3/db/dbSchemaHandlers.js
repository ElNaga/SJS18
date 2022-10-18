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
const updateOne = async (id,data) => {
    return Menu.updateOne({_id: id}, data)
}
const updatePartial = async (id,data) => {
    return Menu.updateOne({_id: id}, data)
}