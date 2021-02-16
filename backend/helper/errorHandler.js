const session = require("../mongooseSchema/users");
const bcrypt = require("bcrypt");
const { REGEX_EMAIL } = require("../config/config");


async function errorRegHandler(data) {

    let { email, username, password, rePass } = data;
    
    let emailUser = email.toLowerCase();
    let userNames = username.toLowerCase();


    let emails = await session.findOne({ email: emailUser });

    let nickname = await session.findOne({ username: userNames });
    


    if (emails) {
        throw { message: "Try another email! :)" }
    }
    if(nickname) {
        throw {message: "Pleace try another username! :)"}
    }
    if (email.length < 3) {
        throw { message: "The email is too short" };
    }
    if (!REGEX_EMAIL.test(email)) {
        throw { message: "Email is not currect!" }
    }
    if (password.length < 6) {
        throw { message: "The passowrd is too short!" }
    }
    if (password != rePass) {
        throw { message: "The password is wrong! Try again!" }
    }


    return null;
};

async function errorLoginHandler(data) {

    let { email, password } = data;

    let emails = email.toLowerCase();


    let emailUser = await session.findOne({ email: emails })


    if (!emailUser) {
        throw { message: "Email is not correct! :)" }
    }

    let isTrue = await bcrypt.compare(password, emailUser.hashPassword);

    if (!isTrue) {
        throw { message: "The password is not correct! Try again!" }
    }

    return null;
}

module.exports = {
    errorRegHandler,
    errorLoginHandler
}