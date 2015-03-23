var koa = require('koa');
var app = koa();
var serve = require('koa-static');
var settings = require('./app/conf/app.settings');

// Connect to DB
require('./api/conf/db/db.setup')();

app.use(serve(__dirname + '/public', {maxage: settings.publicCache}));

require('./app/conf/app.bootstrap')(app);
require('./app/conf/app.routes')(app);


app.listen(settings.port, function () {
    console.log('Started.. ');
});