'use strict';
var Project = require('../../api/project/project.model');

exports.getProj = function *() {
    
    let projects = yield Project.find().exec();

    yield this.render("projects", {

        title: 'Projects',
        welcomeMessage: 'Project Page..',
        projects: projects

    });

};
