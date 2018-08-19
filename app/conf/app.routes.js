'use strict';

// ** PAGE ROUTERS ** //
const homeRoutes = require('../home/home.router');
const projPageRoutes = require('../projects/projects.router');
const adminPageRoutes = require('../admin/admin.router');

// ** API ROUTERS ** //
const projectRoutes = require('../../api/project/project.router');

module.exports = function (app) {

    // ** PAGE ROUTERS ** //
    app.use(homeRoutes.routes());
    app.use(projPageRoutes.routes());
    app.use(adminPageRoutes.routes());

    // ** API ROUTERS ** //
    app.use(projectRoutes.routes());

};

