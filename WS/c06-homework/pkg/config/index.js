const fs = require('fs');

let config = null;

if (!config) {
    let data = fs.readFileSync(`${__dirname}/../../config.json`);
    config = JSON.parse(data)
}

const get = (key) => {
    if (config[key]) {
        return config[key];
    }
    return null;
}

module.exports = {
    get
};