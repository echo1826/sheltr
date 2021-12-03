const {
    User,
    Dog,
    Settings
} = require("../models");
const {
    signToken
} = require('../utils/auth.js');
const {
    AuthenticationError
} = require('apollo-server-express');

const resolvers = {
    Query: {
        dogs: async () => {
            return await Dog.find({});
        },
        user: async (parent, args) => {
            const user = await User.findOne(args.id).populate('pets');

            if (!user) {
                throw new AuthenticationError('Not logged in or user does not exisit');
            }

            return user;
        },
        ageSizeSpayedHouseTrained: async (parent, args) => {
            const dogData = await Dog.find({
                age: args.age,
                spayed: args.spayed,
                size: args.size,
                house_trained: args.house_trained
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        ageSizeSpayed: async (parent, args) => {
            const dogData = await Dog.find({
                age: args.age,
                spayed: args.spayed,
                size: args.size
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        ageSizeHouseTrained: async (parent, args) => {
            const dogData = await Dog.find({
                age: args.size,
                size: args.size,
                house_trained: args.house_trained
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        ageSpayedHouseTrained: async (parent, args) => {
            const dogData = await Dog.find({
                age: args.age,
                spayed: args.spayed,
                house_trained: args.house_trained
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        sizeHouseTrainedSpayed: async (parent, args) => {
            const dogData = await Dog.find({
                size: args.size,
                spayed: args.spayed,
                house_trained: args.house_trained
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        ageSpayed: async (parent, args) => {
            const dogData = await Dog.find({
                age: args.age,
                spayed: args.spayed
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        ageHouseTrained: async (parent, args) => {
            const dogData = await Dog.find({
                age: args.age,
                house_trained: args.house_trained
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        ageSize: async (parent, args) => {
            const dogData = await Dog.find({
                age: args.age,
                size: args.size
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        age: async (parent, args) => {
            const dogData = await Dog.find({
                age: args.age
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        spayedSize: async (parent, args) => {
            const dogData = await Dog.find({
                spayed: args.spayed,
                size: args.size
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        spayedHouseTrained: async (parent, args) => {
            const dogData = await Dog.find({
                spayed: args.spayed,
                house_trained: args.house_trained
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        spayed: async (parent, args) => {
            const dogData = await Dog.find({
                spayed: args.spayed
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        sizeHouseTrained: async (parent, args) => {
            const dogData = await Dog.find({
                size: args.size,
                house_trained: args.house_trained
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        size: async (parent, args) => {
            const dogData = await Dog.find({
                    size: args.size
                });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        houseTrained: async (parent, args) => {
            const dogData = await Dog.find({
                house_trained: args.house_trained
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        age: async(parent, args) => {
            const dogData = await Dog.find({
                age: args.age
            });
            if(!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        settings: async (parent, args) => {
            return await Settings;
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return user;
            return { token, user };
        },
        updateUserPets: async (parent,{ _id, petId }) => {
            const user = await User.findById(_id).populate('pets');
            const petsArr = user.pets;
            petsArr.push(petId);

            return await User.findByIdAndUpdate(_id, { pets: petsArr }, { new:true });
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne(email);

            if(!user) {
                throw new AuthenticationError('Incorrect email or password');
            }

            //Check user password

            const token = signToken(user);
            return { token, user };
            },
        addSettings: async (parent, {userId}) => {
            return await Settings.create({
                userId: userId,
                age: 'Young',
                size: 'Medium',
                spayed: 'true',
                house_trained: 'true'});
        },
        updateSettings: async (parent, args) => {
            return await Settings.findByIdAndUpdate(args._id, { args }, { new:true });
        }
    }
};

module.exports = resolvers;