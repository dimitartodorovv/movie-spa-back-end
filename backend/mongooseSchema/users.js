const mongoose = require("mongoose");


const userSession = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("session", userSession);