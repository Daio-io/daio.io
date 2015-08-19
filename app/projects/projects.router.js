'use strict';

const projHandlers = require('./projects.handlers');
const router = require('koa-router')();

router.get('/projects', projHandlers.getProj);

module.exports = router;