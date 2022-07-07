const fs = require('fs');


const fileWrite = async (reqData,fileName) => {
    return new Promise( (success,fail) => {
        fs.writeFile(fileName,reqData, (err) => {
            return fail(err);
        });
        return success();
    });
}

module.exports = {
    fileWrite
}