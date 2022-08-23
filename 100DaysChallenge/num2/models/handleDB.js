// read some
// write one
// delete one

//add section
//delete section

const mongoose = require('mongoose');

const MenuSoma = mongoose.model (
    'menuSoma',
    {
        product: String,
        price: Number,
        category: String,
        description: String,
        linkDes: String,
        flag: Boolean
    },
    'menuSoma'
);


const addProduct = async(data) => {
    let newProduct = new MenuSoma(data);
    return newProduct.save();
}

const getCategory = async (data) => {
    let categList = MenuSoma.find({})
    return categList;
}


const allCategories = async ()=> {
    return MenuSoma.find({}).distinct('category');
}

module.exports = {
    addProduct,
    getCategory,
    allCategories
}