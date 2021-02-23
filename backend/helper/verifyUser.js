const userSession = require("../mongooseSchema/users");
const {SECRET_KEY} = require("../config/config");
const jwt = require('jsonwebtoken');

module.exports = async function (token) {

    try {
        
        const decode =  jwt.verify(token,SECRET_KEY);
           
        const user = await userSession.findOne({_id: decode.id});  
           
        if(!user) {
             throw new Error()
         }        
         return user._id;
    } catch (error) {
       
         return  {error: "You are not authorized!"}
      
    }
}