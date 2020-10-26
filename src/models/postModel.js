const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const postModel = new mongoose.Schema({
    judul: {
        type: String,
        trim: true, // merapihkan string yang tidak beraturan
        required: true
    },
    content: {
        type: String,
        required: true
    },

    author: {
        type: ObjectID
    },

    createdAt: {
        type: Date
    }
});
const Post = mongoose.model('Post', postModel);

module.exports = Post;