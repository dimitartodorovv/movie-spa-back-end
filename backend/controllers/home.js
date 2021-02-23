const router = require("express").Router();




router.get("/", (req,res) => {
       console.log(req.USERID);
        res.status(200).json({message: `Welcome again!!!!`});
});




module.exports = router;