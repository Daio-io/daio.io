'use strict';

var BlogPost = require('./blog.model');

exports.getBlogPosts = function *() {

    let response = yield BlogPost.find().exec();

    this.body = response;

};

exports.getBlogPostById = function *() {

    let id = this.params.id;

    try {
        let response = yield BlogPost.findById(id).exec();

        this.body = {

            _id: response._id,
            title: response.title,
            short: response.short,
            full: response.full,
            date: response.getDateCreated()

        };

    } catch (err) {

        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request'}
    }


};

exports.postBlog = function *() {

    let body = this.request.body;
    let blogPost = new BlogPost({

        title: body.title,
        short: body.short,
        full: body.full

    });

    let saved = yield blogPost.save();

    this.body = {id: saved._id, status: 'success'}

};

exports.deleteByID = function *() {

    let id = this.params.id;

    try {
        let removed = yield BlogPost.remove({_id: id}).exec();

        this.body = {status: removed, message: removed + ' Projects deleted'}
    }
    catch (err) {

        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request'}
        
    }

};