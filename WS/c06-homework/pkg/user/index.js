const mongoose = require('mongoose')

const User = mongoose.model(
    'users',
    {
        email: { type: String, required: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
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