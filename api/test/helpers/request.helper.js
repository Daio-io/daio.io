'use strict';

var RequestHelper = function (_baseUrl) {
    
    this.rest = require('restler');
    this.baseURL = _baseUrl;
    
};

RequestHelper.prototype.post = function (endpoint, postData) {
    return this.rest.post(this.baseURL + endpoint, {
        data: postData
    });
};

RequestHelper.prototype.delete = function (endpoint) {
    return this.rest.del(this.baseURL + endpoint);
};

RequestHelper.prototype.get = function (endpoint) {
    return this.rest.get(this.baseURL + endpoint);
};

module.exports = RequestHelper;
