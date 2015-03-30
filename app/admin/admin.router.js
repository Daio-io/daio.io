var adminHandlers = require('./admin.handlers');
var router = require('koa-router')();

router.get('/login', adminHandlers.getLoginPage);
router.get('/blogs', adminHandlers.addBlog);
router.get('/project', adminHandlers.addProject);

router.post('/login', adminHandlers.postLogin);
router.post('/project', adminHandlers.postBlog);
router.post('/blog', adminHandlers.postProject);


module.exports = router;