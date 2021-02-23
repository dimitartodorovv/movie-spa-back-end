const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 10
    },
    imageUrl: {
        type: String,
        required: true
    },
    peopleLiked: {
        type: Number,
        min: 0,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "session"
    },
    userLiked: [{
        type: mongoose.Types.ObjectId,
        ref: "session"
    }]
});

module.exports = mongoose.model("movieS", movieSchema)