'use strict';

const homeHandlers = require('./home.handlers');
const router = require('koa-router')();

router.get('/', homeHandlers.getHome);

module.exports = router;