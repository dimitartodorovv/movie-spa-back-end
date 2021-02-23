const { COOKIE_NAME, SECRET_KEY, REFRESH_TIME } = require("../config/config");
const jwt = require('jsonwebtoken');
const { messageError, typeError } = require("../helper/errorHandler");
const timeForRefToken = require("../config/tokenRefreshTime");
const refUserToken = require("../helper/refToken");
const verifyUser = require("../helper/verifyUser");


module.exports = async function (req, res, next) {

    console.log("REGISTER AUTHENTICATION");

    const token = req.cookies[COOKIE_NAME];
    let checkForNewCookie = true;

    if (!token) {
        res.status(typeError(404)).json(messageError("You are not authorized!"));
        return
    }

    const dec = jwt.decode(token);

    if (timeForRefToken(dec.exp) >= REFRESH_TIME) {
        console.log(timeForRefToken(dec.exp) >= REFRESH_TIME);
        const result = await refUserToken(token, dec.id)
        
        if (result.error) {
            console.log("YES");
            res.clearCookie(COOKIE_NAME)
            res.status(typeError(404)).json(messageError(result.error));

            return
        }
        console.log("REFRESH TOKEN NOW");
        const newToken = result;
        res.cookie(COOKIE_NAME,newToken);
        checkForNewCookie = false;
    }


    const stats = await verifyUser(token)
    

    if (checkForNewCookie && stats.error) {
        console.log("DELETE COOKIE");
        res.clearCookie(COOKIE_NAME)
        res.status(typeError(404)).json(messageError(stats.error));

        return
    }


    next()
}