'use strict';

var homeRoutes = require('../home/home.router');
var projectRoutes = require('../../api/project/project.router');

module.exports = function (app) {

    app.use(homeRoutes.routes());
    app.use(projectRoutes.routes());

};

