const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require("../config/config");
const refToken = require("../mongooseSchema/refreshToken");
const {nanoid} = require("nanoid");

 function tokenMaker(data) {

    let payload = data;
    let optians = {expiresIn: "1h"};
    
   const token = jwt.sign(payload,SECRET_KEY,optians);
    
    if(!token) {
        throw {message: "Server problems!"}
    }

    return token
};

async function genRefreshToken(userId,ipAddress) {
    const tokenID = nanoid()
        const refreshToken = new refToken({
            user: userId, 
            token: tokenID,
            expires: new Date(Date.now() + 7*24*60*60*1000),
            createdByIp: ipAddress
        })

       await refreshToken.save()
};


async function refreshTokenUser(id) {
    
    const refreshToken =  await refToken.findOne({_id: id});

    refreshToken.expires = new Date(Date.now() + 7*24*60*60*1000);

     await refreshToken.save()
}

// async function revokeToken(token , ipAddress) {
//     const refreshToken = await getRefreshToken(token);

//     refreshToken.revoked = Date.now();
//     refreshToken.revokedByIp = ipAddress;
//     refreshToken.save()
// }


// async function getRefreshToken(token) {
//         const refreshToken = await refToken.findOne({token}).populate('user');
//             console.log("refreshtoken",refreshToken);
           
//         if(!refreshToken || !refreshToken.isActive) {
//             throw {message: "Invalide token"}
//         }
//         return refreshToken
// }



module.exports = {
    tokenMaker,
    genRefreshToken,
    refreshTokenUser
}