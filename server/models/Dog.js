const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: {
        type: String
    },
    breed: {
        primary: {
            type: String,
            trim: true
        },
        secondary: {
            type: String,
            trim: true
        },
        mixed: {
            type: Boolean
        },
        unknown: {
            type: Boolean
        }
    },
    age: {
        type: String
    },
    size: {
        type: String
    },
    photo: [
        {
            small: {
                type: String,
                trim: true
            },
            medium: {
                type: String,
                trim: true
            },
            large: {
                type: String,
                trim: true
            },
            full: {
                type: String,
                trim: true
            }
        }
    ],
    url: {
        type: String,
        trim: true
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    spayed: {
        type: Boolean
    },
    house_trained: {
        type: Boolean
    },
    shots: {
        type: Boolean
    },
    gender: {
        type: String
    },
    organization: {
        type: String
    }
});

const Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog;