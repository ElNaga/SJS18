const fs = require('fs');

let limiters = null;

if (!limiters) {
    limiters =  JSON.parse(fs.readFileSync(`${__dirname}/../../limiters.json`));
} 

// console.log(limiters)
const getImageTypes = () => {
    if (limiters.imageTypes)
    {return limiters.imageTypes;}
};

const getSizeLimit = () => {
    if (limiters.sizeLimit)
    {return limiters.sizeLimit;}
}

module.exports = {
    getImageTypes,
    getSizeLimit
}