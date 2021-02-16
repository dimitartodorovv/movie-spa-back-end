const config = {
    development : {
        port:  5050
    },
    production: {
        port: 80
    } 

}

module.exports = config[process.env.NODE_ENV.trim()];