'use strict';

var mongoose = require('mongoose');
var blogPostSchema = mongoose.Schema({

    title: { type: String, required: false },
    short: { type: String },
    full: { type: String, required: false }
});

blogPostSchema.methods.getDateCreated = function () {
    var timeStamp = this._id.getTimestamp();
    var date = timeStamp.getUTCDate();
    var month = timeStamp.getUTCMonth() + 1; // Month starts at 0
    var year = timeStamp.getUTCFullYear();

    return date + '/' + month + '/' + year;
};

var BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;