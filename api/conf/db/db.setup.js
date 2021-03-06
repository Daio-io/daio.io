'use strict';

const mongoose = require('mongoose');
const config = require('./db.config');

module.exports = function () {

    switch (process.env.NODE_ENV) {
        case 'production':

            mongoose.connect(config.prod.connectionString, config.prod.options);
            break;

        case 'test':

            mongoose.connect(config.test.connectionString, config.test.options);
            break;

        default:

            mongoose.connect(config.dev.connectionString, config.dev.options);
            break;
        
    }

};