const db = require('../index');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    password: String
});

var User = mongoose.model("User", userSchema);

module.exports = User;