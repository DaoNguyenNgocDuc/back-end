const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.register = (req, res, next) => {
    const {username, email, password} = req.body;
    const usernameCheck = await User.findOne({username});
123345
};