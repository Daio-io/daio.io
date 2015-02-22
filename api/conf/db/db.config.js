module.exports = {

    development: {
        connectionString: 'mongodb://localhost/mysite',

        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    },

    live: {
        connectionString: 'todo',

        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    }
};

