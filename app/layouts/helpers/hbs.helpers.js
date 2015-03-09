'use strict';

// Set of handlebars helpers to be used on page
var Handlebars = require('handlebars');

module.exports = {

    addLabels: function () {

        if (this.toUpperCase() === 'ANDROID') {

            return new Handlebars.SafeString('<div class="ui green label">' + this + '</div>');

        }

        else {
            
            return new Handlebars.SafeString('<div class="ui label">' + this + '</div>');

        }

    }

};