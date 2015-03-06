'use strict';

var BlogPost = require('./blog.model');

exports.getBlogPosts = function *() {

    var response = yield BlogPost.find().exec();

    this.body = response;

};

exports.getBlogPostById = function *() {

    var id = this.params.id;

    try {
        var response = yield BlogPost.findById(id).exec();

        var res = {

            _id: response._id,
            title: response.title,
            short: response.short,
            full: response.full,
            date: response.getDateCreated()

        };

        this.body = res;
    } catch (err) {

        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request'}
    }


};

exports.postBlog = function *() {

    var body = this.request.body;
    var blogPost = new BlogPost({

        title: body.title,
        short: body.short,
        full: body.full

    });

    var saved = yield blogPost.save();

    this.body = {id: saved._id, status: 'success'}


};

exports.deleteByID = function *() {

    var id = this.params.id;

    try {
        var removed = yield BlogPost.remove({_id: id}).exec();

        this.body = {status: removed, message: removed + ' Projects deleted'}
    }
    catch (err) {

        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request'}
        
    }

};