'use strict';

var projectHandlers = require('./project.handlers');
var router = require('koa-router')();

router.get('/projects', projectHandlers.getProjects);

module.exports = router;