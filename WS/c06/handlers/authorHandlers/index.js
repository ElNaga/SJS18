const dbAuthor = require("../../pkg/author")

const getAllAuthors = async (req, res) => {
    try {
        let users = await dbAuthor.getAuthors()
        return res.send(users);
    } catch (error) {
        console.log(error)
        return res.status(500).send("ISE!")
    }
}

module.exports = {

    getAllAuthors,
}