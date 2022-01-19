const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    animalType: {
        type: String
    },
    name: {
        type: String
    },
    breeds: {
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
    age:{
        type: String
    },
    size: {
        type: String
    },
    house_trained: {
        type: Boolean
    },
    declawed: {
        type: Boolean
    },
    shots: {
        type: Boolean
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
    gender: {
        type: String
    },
    location: {
        type: String
    },
    organization: {
        type: String
    }
});

const Cat = mongoose.model("Cat", CatSchema);

module.exports = Cat;