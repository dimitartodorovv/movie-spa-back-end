const router = require("express").Router();

const funcMovies = require("../service/movieFn");
const isRegister = require("../middleWares/isRegister");
const {COOKIE_NAME} = require("../config/config");



router.post("/create",isRegister, (req,res) => {

    console.log(req.body);
    funcMovies.addMovie(req.body,req.USERID).then(data => {
        
        res.status(200).json({
            data: data,
            message: "Successfuly Create Movie!"
        })
        
    }).catch(err => {
            
            res.status(404).json({error: err.message})

    })


});

router.get("/movies", isRegister,(req,res) => {

        funcMovies.getAllMovie().then(data => {
            
                res.status(200).send({ data})
        }).catch(err => {
            res.status(404).send({error: err.message})
        })
});

router.get("/details/:id", isRegister,(req,res) => {
    
    const id = req.params.id;

    funcMovies.getMovie(id).then(data => {
        res.status(200).json({data})
    }).catch(err => {
        res.status(404).send({error: err.message})
    })
});

router.patch("/edit/:id", isRegister, (req,res) => {

    let id = req.params.id;
    let data = req.body;
    console.log(data,id);
    
    funcMovies.editMovie(id,data).then(data => {
        res.status(200).json({data})
    }).catch(err => {
        res.status(404).send({error: err.message})
    })
});

router.post("/like/:id", isRegister, (req,res) => {
  
    let id = req.params.id;
    let idUser = req.body.id;
        funcMovies.likeMovie(id,idUser).then(data => {
            res.status(200).json({data})
        }).catch(err => {
            res.status(404).send({error: err.message})
        })
});

router.delete("/delete/:id", isRegister, (req,res) => {

    let id = req.params.id;

    funcMovies.deleteMovie(id).then(data => {
        res.status(200).json({data})
    }).catch(err => {
        res.status(404).send({error: err.message})
    })
})

module.exports = router;