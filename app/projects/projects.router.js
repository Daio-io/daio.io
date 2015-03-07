'use strict';

var projHandlers = require('./projects.handlers');
var router = require('koa-router')();

router.get('/projects', projHandlers.getProj);

module.exports = router;