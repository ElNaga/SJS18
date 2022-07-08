const util = require('./util');

const DATA_SOURCE = './data.txt';

const addStudent = async (req, res) => {
    try {
        // ја вчитуваме содржината на фајлот како стринг
        let dataRaw = await util.fileRead(DATA_SOURCE);
        // проверуваме да не е празен фајлот
        let data = null;
        // претпоставуваме дека ако има нешто во фајлот, тоа е валиден JSON
        data = dataRaw.length > 0 ? JSON.parse(dataRaw) : [];
        // if(dataRaw.length > 0) {
        //     data = JSON.parse(dataRaw);
        // } else {
        //     data = [];
        // }
        // го додаваме новиот запис како нов член на низата
        data.push(req.body);
        // ја запишуваме низата во фајлот
        await util.fileWrite(DATA_SOURCE, JSON.stringify(data));
        // враќаме некаков output кон клиентот (postman)
        res.send('ok');
    } catch(err) {
        res.send(err);
    }
};

const getAllStudents = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        return res.send(JSON.parse(dataRaw));
    } catch (error) {
        res.send(err);
    }
};

const getOneStudent = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        if(data[req.params.id]) {
            return res.send(data[req.params.id]);
        }else res.send('no student found');
    } catch (err) {
        res.send(err);
    }
};

const updateStudent = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);

        if(data[req.params.id]) {
            data[req.params.id] = req.body;
            await util.fileWrite(DATA_SOURCE, JSON.stringify(data));
            res.send('ok');
        }else {
            res.send('no student found');
        }
    } catch (err) {
        res.send(err);
    }
};

const deleteStudent = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        if(data[req.params.id]) {
            await util.fileWrite(DATA_SOURCE, JSON.stringify(data.filter( student => student != data[req.params.id])));
            res.send('ok');
        }else res.send('not found');
    } catch (err) {
        res.send(err);
    };
};

module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent
};