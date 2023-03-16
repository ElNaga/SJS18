const dbPost = require("../../pkg/post")
const dbAuthor = require("../../pkg/author")

// const getAllAuthors = async (req, res) => {
//     return res.send('ok');
// }

const getAllPosts = async (req, res) => {
    try {
        let posts = await dbPost.getPosts()
        return res.status(200).send(posts)
        
    } catch (err) {
        console.log(err)
        return res.status(500).send("ISE!")
    }

}

const getPostsFromAuthor = async (req, res) => {
    try {
        let ps = await dbPost.getPostsByAuthor(req.params.handle);
        res.status(200).send(ps);
    } catch (err) {
        return res.status(500).send('ISE!');
    }
};
const getPostsFromMe = async (req, res) => {
    try {
        let ps = await dbPost.getPostsByAuthor(req.auth.author_id);
        res.status(200).send(ps);
    } catch (err) {
        return res.status(500).send('ISE!');
    }
};


const create = async (req, res) => {
    try {

            let payload = {
                ...req.body,
                author_id: req.auth.uid,
                published_on: new Date()
            };
            let c = await dbPost.create(payload);
        return res.status(204).send(c);

    } catch (err) {
        console.log(err)
        return res.status(500).send('ISE!');
    }
}


const update = async (req, res) => {
    try {
        if (req.auth.author_id == req.params.handle) {
            let payload = {
                ...req.body,
                author_id: req.auth.uid,
                published_on: new Date()
            };
            await dbPost.update(req.params.id, payload);
            return req.status(204).send('');
    } else {
        return req.status(403).send('Permision denied!');
    }
    } catch (err) {
        return res.status(500).send('ISE!');
    }
};

const remove = async (req, res) => {
    try {
        if (req.auth.author_id == req.params.handle) {
        await dbPost.remove(req.params.id);
        return res.status(204).send('');
        }else {
            return res.status(403).send('Permision denied!');
        }
    } catch (err) {
        return res.status(500).send('ISE!');
    }
}


module.exports = {
    getAllPosts,
    getPostsFromAuthor,
    create,
    update,
    remove,
    getPostsFromMe
}