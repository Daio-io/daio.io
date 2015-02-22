module.exports = {

    dev: {
        connectionString: 'mongodb://localhost/mysite',

        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    }

};

