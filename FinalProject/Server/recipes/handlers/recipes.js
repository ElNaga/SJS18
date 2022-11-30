const config = require('../../../pkg/config')
const recipes = require('../../../pkg/recpies')
const check = require('../../../pkg/inputCheck')


const createRecipe = async (req, res) => {
    try {
        // data check for category
        let category = req.body.category
        if (check.checkStringOfCategory(req.body)){
            let r = recipes.create(req.body)
            console.log('Recipe saved')
            return res.status(200).send('ok');
        } else {
            console.log('Error with recipe creation');
            return res.status(400).send('Bad Request!');
        }
    } catch (err) {
        
    }
}

const updateRecipe = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}

const recipesByDate = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}

const recipesByFave = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}

const recipesByCategory = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}

const recipesOne = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}

const deleteOne = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}




module.exports = {
    createRecipe,
    updateRecipe,
    recipesByDate,
    recipesByFave,
    recipesByCategory,
    recipesOne,
    deleteOne
}
