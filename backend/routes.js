const routes = require("express").Router();


const homePage = require("./controllers/home");
const registration = require("./controllers/registration");

routes.use('/', homePage);
routes.use("/auth", registration);


module.exports = routes;