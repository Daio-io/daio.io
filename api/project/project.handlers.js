'use strict';

const Project = require('./project.model');

exports.getProjects = function *() {

    let response = yield Project.find().exec();
    this.body = response;

};

exports.getProjectById = function *() {

    let id = this.params.id;

    try {
        let response = yield Project.findById(id).exec();
        this.body = response;
    } catch (err) {
        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request'}
    }

};

exports.postProject = function *() {

    let body = this.request.body;
    let project = new Project({

        name: body.name,
        description: body.description,
        meta: body.meta,
        projectURL: body.projectURL,
        imageURL: body.imageURL,
        labels: body.labels

    });

    try {
        let saved = yield project.save();

        this.body = {id: saved._id, status: 'success'}
    }
    catch (err) {

        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request: ' + err.path}

    }



};

exports.deleteByID = function *() {

    let id = this.params.id;

    try {
        let removed = yield Project.remove({_id: id}).exec();

        this.body = {status: removed, message: removed + ' Projects deleted'}
    }
    catch (err) {

        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request'}

    }

};