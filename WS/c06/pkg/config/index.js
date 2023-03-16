const fs = require('fs')

let config = null;

if (!config) {
    let data = fs.readFileSync(`${__dirname}/../../config.json`);
    console.log('this is config indexjs',data)
    config = JSON.parse(data)
}
const get = (section) => {
    if(config[section]) {
        console.log('this is get')
        return config[section];
    }
    return null;
};


module.exports = {
    get
}