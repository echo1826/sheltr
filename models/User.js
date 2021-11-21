const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        trim: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        require: "Password is required",
        trim: true,
        minLength: 7,
        match: [/^[a-z0-9A-Z]+$/, "Password can only contain alphanumeric characters"]
    },
    pets: {
        type: Array
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;