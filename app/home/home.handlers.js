exports.getHome = function *() {

    yield this.render("home", {

        title: 'Header Placeholder',
        welcomeMessage: 'Building..'

    });

};