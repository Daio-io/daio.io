'use strict';

const blogPostHandlers = require('./blogposts.handlers');
const router = require('koa-router')();

router.get('/blog', blogPostHandlers.getBlog);
router.get('/blog/:title', blogPostHandlers.getBlogByTitle);

module.exports = router;
