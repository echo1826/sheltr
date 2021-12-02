const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    age: {
        type: String
    },
    size: {
        type: String
    },
    spayed: {
        type: Boolean
    },
    house_trained: {
        type: Boolean
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = Settings;