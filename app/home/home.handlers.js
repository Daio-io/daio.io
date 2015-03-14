exports.getHome = function *() {

    yield this.render("home", {

        title: 'Daio.IO | Node and Android Developer'
    });

};