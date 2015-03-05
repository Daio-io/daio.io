'use strict';

var blogHandlers = require('./blog.handlers');
var router = require('koa-router')();

router.post('/api/blogpost', blogHandlers.postBlog);
router.get('/api/blogposts', blogHandlers.getBlogPosts);
router.get('/api/blogpost/:id', blogHandlers.getBlogPostById);
router.del('/api/blogpost/:id', blogHandlers.deleteByID);

module.exports = router;