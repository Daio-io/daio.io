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
    },
    
    test: {
        connectionString: 'mongodb://localhost/mysite_test',

        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    },
    
    prod: {
        connectionString: process.env.DB_CONNECTION,

        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    }

};

