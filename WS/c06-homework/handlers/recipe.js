const recipe = require('../pkg/recipe')
const user = require('../pkg/user')



const addRecipe = async (req, res) => {
    //zemi req.body, dodaj auth.id vo data i vo DB zapishi
    try {
        //body payload: {name_of_recipe, ingredients[1,2,3],time_for_cooking,explanation}
        // required info: author_id; name_of_recepie; explanation
        let data = {
            ...req.body,
            author_id: req.auth.uid,
        }
        let R = await recipe.create(data);
        return res.status(201).send(R);
    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(500).send('Internal Server Error! Error: 500')
        }
    }
}

const getAll = async (req, res) => {
    try {
        let info = await recipe.getAll();
        return res.status(200).send(info)

    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(500).send('Internal Server Error! Error: 500')
        }
    }
}
const getOneById = async (req, res) => {
    try {
        let r = await recipe.getOne(req.params.id);
        return res.status(200).send(r)
        
    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(500).send('Internal Server Error! Error: 500')
        }
    }
}
const updateThis = async (req, res) => {
    try {

        //body payload: {name_of_recipe, ingredients[1,2,3],time_for_cooking,explanation
        let dataUpdate = {
            ...req.body,
            editedDate: Date.now(),
            edited: true
        }
        // console.log(req.params.body)  <------ ahahahahahhahahahahaah
        // console.log("------this is uid-------")
        // console.log(req.auth.uid)
        // console.log("------this is uid-------")
        let up = await recipe.update(req.params.id, req.auth.uid, dataUpdate);
        if (!up) {
            return res.status(404).send('Error 404. Record not found!');
        } //else {console.log(up)}
        return res.status(204).send('updated')
    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(500).send('Internal Server Error! Error: 500');
        }
    }
}
const deleteOne = async (req, res) => {
    try {
        let del = await recipe.remove(req.params.id, req.auth.uid);
        if (!del) {
            return res.status(404).send('Error 404. Record not found!');
        }
        return res.status(204).send('');
    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(500).send('Internal Server Error! Error: 500');
        }
    }
}

module.exports = {
    addRecipe,
    getAll,
    getOneById,
    updateThis,
    deleteOne
}