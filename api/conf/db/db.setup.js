'use strict';

var mongoose = require('mongoose');
var config = require('./db.config');

module.exports = function () {

    mongoose.connect(config.dev.connectionString, config.dev.options);

};