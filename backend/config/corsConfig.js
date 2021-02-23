const whitelist = ['http://localhost:3000',"http://localhost:3002"];
const methods =  'PUT,PATCH,POST,DELETE';
var corsOptions = {
    origin: function (origin, callback) {     
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
}

module.exports = {
    corsOptions,
    methods,
}