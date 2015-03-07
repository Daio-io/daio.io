'use strict';

exports.getProj = function *() {

    yield this.render("projects", {

        title: 'Daio.IO - Projects',
        welcomeMessage: 'Project Page..'

    });

};