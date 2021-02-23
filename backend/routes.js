const routes = require("express").Router();


const homePage = require("./controllers/home");
const registration = require("./controllers/registration");
const moviePage = require("./controllers/movie");


routes.use('/', homePage);
routes.use("/movie", moviePage);
routes.use("/auth", registration);


module.exports = routes;