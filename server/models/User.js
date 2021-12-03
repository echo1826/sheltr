const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: "Name is required",
        trim: true
    },
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
    pets: [
        {
            type: Schema.Types.ObjectId,
            ref: "Dog"
        }
    ]
});

UserSchema.pre("save", async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})

UserSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;