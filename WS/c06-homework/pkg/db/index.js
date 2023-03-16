const mongoose = require('mongoose');
const config = require("../config")

const init = () => {
    const url = config.get('db').url
    // console.log(url)
    const password = config.get('db').password
    const username = config.get('db').username
    const dbName = config.get('db').dbName
    const dsn = `mongodb+srv://${username}:${password}@${url}/${dbName}?retryWrites=true&w=majority`;

    mongoose.connect(
        dsn,
        err => {
            if (err) {
                return console.log("Could not connect to DB", err)
            }
            console.log('Successfully connected to DB!');
        }
    )
}

module.exports = {
    init
}