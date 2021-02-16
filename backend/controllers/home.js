const router = require("express").Router();



router.get("/", (req,res) => {
       
        
        res.json({message: `Welcome again!!!!`
       });
})


module.exports = router;