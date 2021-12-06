const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    age: {
        type: String
    },
    size: {
        type: String
    },
    house_trained: {
        type: Boolean
    },
});

const Settings = mongoose.model("Settings", SettingsSchema);

module.exports = Settings;