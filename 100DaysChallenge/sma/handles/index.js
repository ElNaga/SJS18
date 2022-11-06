const db = require('../db/dbSchemaHandlers')

// const getAll = async () => {
//     return Menu.find({})
// }

// const getOne = async (id) => {
//     return Menu.findOne({_id: id})
// }

const getCategoryMenu = (category) => {
    db.getCategory(category)
}

module.exports = {
    getCategoryMenu
}