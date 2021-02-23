const session = require("../mongooseSchema/users");

module.exports = function (req,res,next) {
    
    return (req,res,next) => {
        // console.log(req.headers);
        // console.log(req.cookies);
        // console.log("AUTHENTICATION SECTION BN");
        next()
    }
}