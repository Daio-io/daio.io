'use strict';
const Project = require('../../api/project/project.model');

exports.getProj = function *() {
    
    let projects = yield Project.find()
      .sort('-_id')
      .exec();

    yield this.render("projects", {

        title: 'Daio.io Projects',
        projects: projects

    });

};
