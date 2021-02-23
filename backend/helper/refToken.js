const refreshToken = require("../mongooseSchema/refreshToken");
const jwt = require("jsonwebtoken");
const userSession = require("../mongooseSchema/users");
const {refreshTokenUser,tokenMaker} = require("./tokenMaker");
const {SECRET_KEY} = require("../config/config");


module.exports = async function (token,id) {

    const refToken = await refreshToken.findOne({ user: id });

    if(!refToken) {
        return {error: "This user doesnt have refToken"}
    }

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    const dateNow = `${year}-${month}-${day}`
    const compDateNow = new Date(dateNow);
    const dateExp = new Date(refToken.expires);

    if(compDateNow >= dateExp) {
        refreshTokenUser()
   }


   try {
      
       const decoded =  jwt.decode(token,SECRET_KEY);
          
       const user = await userSession.findOne({_id: decoded.id});  

       if(!user) {
            throw new Error()
        }
        
       const newToken = tokenMaker({decoded});

       return newToken
   } catch (error) {
      
        return  {error: "You are not authorized!"}
     
   }

  

    

}