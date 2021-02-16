const mongoose = require("mongoose");

const refreshToken = new mongoose.Schema({
        user: {
            type: mongoose.Types.ObjectId,
            ref: "session"
        },
        token: {
            type: String
        },
        expires: {
            type: Date,
        },
        created: {
            type: Date,
            default: Date.now
        },
        createdByIp: {
            type: String
        },
        revoked: {
            type: String
        }, 
        revokedByIp: String,
        replacedByToken: String


});

refreshToken.virtual('isExpired').get(function () {
    return Date.now() >= this.expires;
});

refreshToken.virtual('isActive').get(function () {
    return !this.revoked && !this.isExpired;
});


// refreshToken.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//         // remove these props when object is serialized
//         delete ret._id;
//         delete ret.id;
//         delete ret.user;
//     }
// });


module.exports = mongoose.model("RefreshToken", refreshToken)