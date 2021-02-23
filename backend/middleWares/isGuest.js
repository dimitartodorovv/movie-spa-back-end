const {COOKIE_NAME} = require("../config/config");
const {messageError,typeError} = require("../helper/errorHandler");
const jwt = require('jsonwebtoken');

module.exports = function (req,res,next) {
        console.log("GUEST AUTHENTICATION");
       
        const token = req.cookies[COOKIE_NAME];

    
          if(token) {
                res.status(typeError(404)).json(messageError("You are loged!"));
                return
        }
       
       


        next()
        
}