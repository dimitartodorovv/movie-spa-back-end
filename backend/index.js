const config = require("./config/port");
const express = require("express");
const routes = require("./routes");
const app = express();

require("./config/express")(app);
require("./config/mongoose")();
app.use(routes)

app.listen(config.port, console.log(`Listen port ${config.port}`))


