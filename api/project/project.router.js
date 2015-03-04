'use strict';

var projectHandlers = require('./project.handlers');
var router = require('koa-router')();

router.post('/project', projectHandlers.postProject);
router.get('/projects', projectHandlers.getProjects);
router.get('/project/:id', projectHandlers.getProjectById);

module.exports = router;