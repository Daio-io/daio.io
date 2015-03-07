'use strict';

// ** PAGE ROUTERS ** //
var homeRoutes = require('../home/home.router');
var projPageRoutes = require('../projects/projects.router');

// ** API ROUTERS ** //
var projectRoutes = require('../../api/project/project.router');
var blogRoutes = require('../../api/blog/blog.router');

module.exports = function (app) {

    // ** PAGE ROUTERS ** //
    app.use(homeRoutes.routes());
    app.use(projPageRoutes.routes());

    // ** API ROUTERS ** //
    app.use(projectRoutes.routes());
    app.use(blogRoutes.routes());

};

