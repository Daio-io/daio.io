var Project = require('./project.model');

exports.getProjects = function *() {

    var response = yield Project.find().exec();
    this.body = response;

};

exports.getProjectById = function *() {

    var id = this.params.id;

    var response = yield Project.findById(id).exec();
    this.body = response;

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

    var saved = yield project.save();

    this.body = {id: saved._id, status: 'success'}


};

exports.deleteByID = function *() {

    var id = this.params.id;

    var removed = yield Project.remove({ _id: id }).exec();

    this.body = {status: removed, message: removed + ' Projects deleted'}


};