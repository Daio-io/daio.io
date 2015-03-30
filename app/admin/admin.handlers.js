'use strict';

exports.getLoginPage = function *() {

    yield this.render('login', {
        title: 'Daio.io Admin',
        layout: 'admin'
    });

};