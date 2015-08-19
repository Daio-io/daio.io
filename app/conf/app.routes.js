'use strict';

// ** PAGE ROUTERS ** //
const homeRoutes = require('../home/home.router');
const projPageRoutes = require('../projects/projects.router');
const blogPageRoutes = require('../blog/blogposts.router');
const adminPageRoutes = require('../admin/admin.router');

// ** API ROUTERS ** //
const projectRoutes = require('../../api/project/project.router');
const blogRoutes = require('../../api/blog/blog.router');

module.exports = function (app) {

    // ** PAGE ROUTERS ** //
    app.use(homeRoutes.routes());
    app.use(projPageRoutes.routes());
    app.use(blogPageRoutes.routes());
    app.use(adminPageRoutes.routes());

    // ** API ROUTERS ** //
    app.use(projectRoutes.routes());
    app.use(blogRoutes.routes());

};

