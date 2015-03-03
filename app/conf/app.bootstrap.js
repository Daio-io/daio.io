var hbs = require('koa-handlebars');
var settings = require('./app.settings');
var koaBody = require('koa-body');
var koaJson = require('koa-json');

module.exports = function (app) {

    app.use(hbs(
        {
            layoutsDir: 'app/layouts',
            viewsDir: 'app/layouts/views',
            partialsDir: 'app/layouts/partials',
            defaultLayout: 'main',
            cache: settings.templateCache
        }
    ));
    
    app.use(koaBody());
    app.use(koaJson());

};