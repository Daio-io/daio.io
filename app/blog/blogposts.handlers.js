'use strict';
var BlogPosts = require('../../api/blog/blog.model');

exports.getBlog = function *() {

    let blogPostsData = yield BlogPosts.find().exec();

    let blogPosts = yield blogPostsData.map(function (found) {

        return {
            id: found._id,
            title: found.title,
            short: found.short,
            full: found.full,
            date: found.getDateCreated()
        };

    });

    yield this.render("blog", {

        title: 'Blog',
        blogPosts: blogPosts

    });
};

exports.getBlogByTitle = function *() {

    let blogPostData = yield BlogPosts.find({ title: this.params.title }).exec();
    
    let blogPost = blogPostData[0];
    
    blogPost.date = blogPost.getDateCreated();

    yield this.render("blogPost", {

        title: 'Blog',
        blogPost: blogPost

    });

};
