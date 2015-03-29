var hbs = require('koa-handlebars');
var hbsHelpers = require('../layouts/helpers/hbs.helpers');
var settings = require('./app.settings');
var koaBody = require('koa-body');
var koaJson = require('koa-json');
var path = require('path');
var staticCache = require('koa-static-cache');

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