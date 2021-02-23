const session = require("../mongooseSchema/users");
const refreshToken = require("../mongooseSchema/refreshToken");
const errHandler = require("../helper/errorHandler");
const bcrypt = require("bcrypt");
const {SALT} = require("../config/config");
const roles = require("../helper/roles");
const token = require("../helper/tokenMaker");


async function addUser(data) {
    
    let {email,username,password} = data;
   
    const errors = await errHandler.errorRegHandler(data);

    if(errors != null) {

        return errors
    }
    
    let hashPassword = await bcrypt.hash(password, SALT);
   
    const sessionUser = new session({email,username,hashPassword,roles: roles.User});
    
    return  sessionUser.save()
};

async function logUser(data) {
    
    let {email} = data;

    let emails = email.toLowerCase();

    let error = await errHandler.errorLoginHandler(data);
 
     let emailUser = await session.findOne({email: emails}).lean();
        
    if(error != null) {
        return error
    }
    

    let addToken =  token.tokenMaker({id: emailUser._id,role: emailUser.roles});
      
    emailUser.token = addToken;

   
    return emailUser
}
module.exports = {
        addUser,
        logUser,
}