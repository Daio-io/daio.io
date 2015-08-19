'use strict';

const hbs = require('koa-handlebars');
const hbsHelpers = require('../layouts/helpers/hbs.helpers');
const settings = require('./app.settings');
const koaBody = require('koa-body');
const koaJson = require('koa-json');
const path = require('path');
const staticCache = require('koa-static-cache');

module.exports = function (app) {

    app.use(staticCache(path.resolve('./public'), { maxAge: settings.publicCache }));

    app.use(hbs(
        {
            layoutsDir: 'app/layouts',
            viewsDir: 'app/layouts/views',
            partialsDir: 'app/layouts/partials',
            defaultLayout: 'main',
            cache: settings.templateCache,
            helpers: hbsHelpers
        }
    ));

    app.use(koaBody());
    app.use(koaJson());

};