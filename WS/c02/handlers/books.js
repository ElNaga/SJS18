const books = require('../pkg/books');


const getAll = async ( req, res) => {

    try {
        console.log(req.headers)
        let data = await books.getAll();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send('Internal Server Error');
    };
};
const create = async ( req, res) => {

    try {
        let a = await books.create(req.body)
        res.send('Book added')
    } catch (error) {
        console.log(error);
        res.send('Internal Server Error');
    };
};

const getOne = async ( req, res) => {

    try {
        let data = await books.getOne(req.params.id);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send('Internal Server Error');
    };
};

const getOneCharacters = async ( req, res) => {

    try {
        let data = await books.getOneCharacters(req.params.id);
        console.log('this is req', req.body)
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send('Internal Server Error');
    };
};
const getOneAuthors = async ( req, res) => {

    try {
        let data = await books.getOneAuthors(req.params.id);
        console.log('this is req', req.body)
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send('Internal Server Error');
    };
};
const getOneGenres = async ( req, res) => {

    try {
        let data = await books.getOneGenres(req.params.id);
        console.log('this is req', req.body)
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send('Internal Server Error');
    };
};

module.exports = {
    getAll,
    create,
    getOne,
    getOneCharacters,
    getOneAuthors,
    getOneGenres,
}