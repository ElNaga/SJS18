const fs = require('fs');


const fileWrite = async (reqData, fileName) => {
    return new Promise( (success,fail) => {
        fs.writeFile(fileName, reqData, (err) => {
            return fail(err);
        });
        return success();
    });
}

const studenti = async (req, res) => {
    try {
        await fileWrite(JSON.stringify(req.body), "./text.txt");
        console.log('file written!');
        res.send("File created! with object:" + ' ' + JSON.stringify(req.body));
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = {
    fileWrite,
    studenti
}