'use strict';

const adminHandlers = require('./admin.handlers');
const router = require('koa-router')();

router.get('/admin', adminHandlers.getLoginPage);

// TODO: add these handlers
//router.get('/blogs', adminHandlers.addBlog);
//router.get('/project', adminHandlers.addProject);
//
//router.post('/login', adminHandlers.postLogin);
//router.post('/project', adminHandlers.postBlog);
//router.post('/blog', adminHandlers.postProject);


module.exports = router;