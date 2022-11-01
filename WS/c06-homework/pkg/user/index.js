const mongoose = require('mongoose')

const User = mongoose.model(
    'users',
    {
        email: String,
        name: String,
        password: String,
        dateCreated: {type: Date, default: Date.now}
    },
    'users'
);

const create = async (data) => {
    const u = new User(data);
    return u.save();
}
const findByEmail = async (email) => {
    return User.findOne({email: email})
}

module.exports = {
    create,
    findByEmail
}