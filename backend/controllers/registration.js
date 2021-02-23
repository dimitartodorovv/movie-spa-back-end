const router = require("express").Router();

const authentication = require("../service/registration"); 
const {COOKIE_NAME} = require("../config/config");
const token = require("../helper/tokenMaker");
const isGuest = require("../middleWares/isGuest");
const isRegister = require("../middleWares/isRegister");


router.post("/registration", isGuest, (req,res) => {
    
    const ip = req.headers['x-forwarded-for'] || req.ip;
    
    authentication.addUser(req.body).then(data => {
        token.genRefreshToken(data._id,ip);
        res.status(201).json({
            data: data,
            message: "Successful Registration!"})
    }).catch(err => {
        res.send(404).json({error: err.message})
    })
    
    
});

router.post("/login", isGuest,(req,res) => {
    

    authentication.logUser(req.body).then(data => {
      res.cookie(COOKIE_NAME,data.token);
        res.status(200).json({
            message: "Successful Login!",
            token: data.token,
            id: data._id,
            username: data.username,
            email: data.email
        });
    }).catch(err => {
      
        res.send(404).json({error: err.message})
    })

});

router.post("/logout", isRegister, (req,res) => {
    console.log("LOGOUT",req.cookies);
    res.clearCookie(COOKIE_NAME).status(200).json({message: "Succesful Logout!"})
})


module.exports = router;