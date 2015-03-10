'use strict';

var blogPostHandlers = require('./blogposts.handlers');
var router = require('koa-router')();

router.get('/blog', blogPostHandlers.getBlog);
router.get('/blog/:title', blogPostHandlers.getBlogByTitle);

module.exports = router;