'use strict'

const koa = require('koa');
const app = koa();
const http = require('http');

const settings = require('./app/conf/app.settings');

// Connect to DB
require('./api/conf/db/db.setup')();

require('./app/conf/app.bootstrap')(app);
require('./app/conf/app.routes')(app);

const server = http.createServer(app.callback());

server.listen(settings.port, function () {
    console.log('Daio.io Started.. ');

});
