const handleDB = require('../models/handleDB')


const main = async (req, res) => {
    try {
        
        let data = await handleDB.allCategories()
        return res.render('main', {data})
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal Server Error');
    }
}

const category = async(req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}

const addForm = async(req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    main,
    category,
    addForm
}