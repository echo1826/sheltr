const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: {
        type: String
    },
    breed: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    description: {
        type: String
    },
    traits: {
        type: Array
    }
});

const Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog;