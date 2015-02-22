var homeRoutes = require('../home/home.router');

module.exports = function (app) {

    app.use(homeRoutes.routes());

};

