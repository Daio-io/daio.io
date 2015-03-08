'use strict';

exports.getProj = function *() {

    yield this.render("projects", {

        title: 'Projects',
        welcomeMessage: 'Project Page..'

    });

};