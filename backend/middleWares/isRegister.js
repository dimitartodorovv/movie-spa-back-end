const {COOKIE_NAME,SECRET_KEY} = require("../config/config");
const jwt = require('jsonwebtoken');


module.exports = function () {
        return (req,res,next) => {

                const token = req.cookies[COOKIE_NAME];

            if(!token) {
                res.json({message: "You are not authorized!"})
                return
            }

            try {
                const decode = jwt.verify(token,SECRET_KEY);
                
            } catch (error) {
                res.json({message: "You\'r token is expire"})
            }

            next()
        }
}