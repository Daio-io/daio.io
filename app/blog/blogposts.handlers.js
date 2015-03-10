'use strict';
var BlogPosts = require('../../api/blog/blog.model');

exports.getBlog = function *() {

    let blogPosts = yield BlogPosts.find().exec();

    yield this.render("blog", {

        title: 'Blog',
        blogPosts: blogPosts

    });

};

exports.getBlogByTitle = function *() {

    let title = this.params.title;

    let blogPost = yield BlogPosts.find(title).exec();

    yield this.render("blogPost", {

        title: 'Blog',
        blogPosts: blogPost

    });

};
