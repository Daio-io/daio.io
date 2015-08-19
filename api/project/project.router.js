'use strict';

const projectHandlers = require('./project.handlers');
const router = require('koa-router')();

router.post('/api/project', projectHandlers.postProject);
router.get('/api/projects', projectHandlers.getProjects);
router.get('/api/project/:id', projectHandlers.getProjectById);
router.del('/api/project/:id', projectHandlers.deleteByID);

module.exports = router;