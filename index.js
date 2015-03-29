var koa = require('koa');
var app = koa();
var http = require('http');

var settings = require('./app/conf/app.settings');

// Connect to DB
require('./api/conf/db/db.setup')();

require('./app/conf/app.bootstrap')(app);
require('./app/conf/app.routes')(app);

http.createServer( app.callback()).listen(settings.port, function () {
    console.log('Daio.io Started.. ');

});
