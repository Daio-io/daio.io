var Project = require('./project.model');

exports.getProjects = function *() {

    var response = yield Project.find().exec();
    this.body = response;

};

exports.getProjectById = function *() {

    var id = this.params.id;

    try {
        var response = yield Project.findById(id).exec();
        this.body = response;
    } catch (err) {
        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request'}
    }

};

exports.postProject = function *() {

    body = this.request.body;
    var project = new Project({

        name: body.name,
        description: body.description,
        projectURL: body.projectURL,
        platform: body.platform,
        imageURL: body.imageURL

    });

    try {
        var saved = yield project.save();

        this.body = {id: saved._id, status: 'success'}
    }
    catch (err) {

        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request: ' + err.path}

    }



};

exports.deleteByID = function *() {

    var id = this.params.id;

    try {
        var removed = yield Project.remove({_id: id}).exec();

        this.body = {status: removed, message: removed + ' Projects deleted'}
    }
    catch (err) {

        this.status = 400;
        this.body = {status: 'failed', message: 'Invalid request'}

    }

};