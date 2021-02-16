const router = require("express").Router();

const authentication = require("../service/registration"); 
const {COOKIE_NAME} = require("../config/config");


router.post("/registration", (req,res) => {
  
    authentication.addUser(req.body).then(data => {
        res.status(201).json(data)
    }).catch(err => {
        res.json({error: err.message})
    })
    
    
});
router.get("/login", (req,res) => {
    console.log(1);
})

router.post("/login",(req,res) => {
    
    const ip = req.headers['x-forwarded-for'] || req.ip;

    authentication.logUser(req.body,ip).then(data => {
      res.cookie(COOKIE_NAME,data.token,{
          httpOnly: true,
          path: "/"
      });
        res.status(200).json({
            token: data.token,
            id: data._id,
            username: data.username,
            email: data.email
        });
    }).catch(err => {
      
        res.json({error: err.message})
    })

});


module.exports = router;