const mongoose = require('mongoose')

const Post = mongoose.model(
    'post',
    {
        author_id: String,
        content: String,
        published_on: Date
    },
    'posts'
);

const create = async (data) => {
    let p = new Post(data);
    return p.save()
}

const getPosts = async () => {
    return Post.find({});
}
const getPostsByAuthor = async (handle) => {
    return Post.find({author_id: handle});
}
const update = async (id, data) => {
    return Post.updateOne({_id: id}, data);
};
const remove = async (id) => {
    return Post.deleteOne({_id: id});
};

module.exports = {
    create,
    getPosts,
    getPostsByAuthor,
    update,
    remove
}