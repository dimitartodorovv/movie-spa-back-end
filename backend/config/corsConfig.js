const whitelist = ['http://localhost:3000',"http://localhost:3002"];
const methods =  'PUT,PATH,POST,DELETE';
var corsOptions = {
    origin: function (origin, callback) {     
        console.log(origin);
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