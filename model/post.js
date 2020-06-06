const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String
    },
    content: String
})

const Post = mongoose.model('post', postSchema)

module.exports = Post