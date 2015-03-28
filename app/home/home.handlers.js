exports.getHome = function *() {

    yield this.render("home", {

        title: 'Daio.io'
    });

};