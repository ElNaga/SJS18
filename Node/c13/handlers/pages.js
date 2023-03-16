const blogpost = require('../models/blogpost');


const main = async (req, res) => {
    try {
        let data = await blogpost.getAll();
        return res.render('main', {data});
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};
const singleBlogpost = async (req, res) => {
    let data = await blogpost.getOne(req.params.id)
    return res.render('singleBlogpost', {data})
};
const formAdd = async (req, res) => {
    return res.render('form_add')
};
const formEdit = async (req, res) => {
    let data = await blogpost.getOne(req.params.id)
    return res.render('form_edit', {data})
};

module.exports = {
    main,
    singleBlogpost,
    formAdd,
    formEdit
};