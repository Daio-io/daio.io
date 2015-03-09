'use strict';

var Handlebars = require('handlebars');

module.exports = {

    /**
     * @name addLabels
     * @function addLabels (Handlebars helper)
     * @description Adds the correct color label tag to the project
     * @returns {Handlebars.SafeString}
     */
    addLabels: function () {

        let platform = this.toUpperCase();

        switch (platform) {

            case 'ANDROID':
                return new Handlebars.SafeString('<div class="ui green tag label">' + this + '</div>');
            case 'WEB':
                return new Handlebars.SafeString('<div class="ui orange tag label">' + this + '</div>');
            case 'NODE':
                return new Handlebars.SafeString('<div class="ui red tag label">' + this + '</div>');
            default:
                return new Handlebars.SafeString('<div class="ui label">' + this + '</div>');

        }

    }

};
