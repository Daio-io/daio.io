'use strict';

const mongoose = require('mongoose');
const blogPostSchema = mongoose.Schema({

    title: { type: String, required: false },
    short: { type: String },
    full: { type: String, required: false }
});

blogPostSchema.methods.getDateCreated = function () {
    let timeStamp = this._id.getTimestamp();
    let date = timeStamp.getUTCDate();
    let month = timeStamp.getUTCMonth() + 1; // Month starts at 0
    let year = timeStamp.getUTCFullYear();

    return date + '/' + month + '/' + year;
};

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;