var koa = require('koa');
var app = koa();
var path = require('path');
var staticCache = require('koa-static-cache');
var settings = require('./app/conf/app.settings');

// Connect to DB
require('./api/conf/db/db.setup')();

app.use(staticCache(path.join(__dirname + '/public'), {maxAge: settings.publicCache}));

require('./app/conf/app.bootstrap')(app);
require('./app/conf/app.routes')(app);


app.listen(settings.port, function () {
    console.log('Started.. ');
});