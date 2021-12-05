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
        user: async (parent, args, context) => {
            const user = await User.findOne(args.id).populate('pets');

            if (!user) {
                throw new AuthenticationError('Not logged in or user does not exisit');
            }

            return user;
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
        age: async (parent, args) => {
            const dogData = await Dog.find({
                age: args.age
            });
            if (!dogData) {
                throw new Error("No dogs found!");
            }
            return dogData;
        },
        settings: async (parent, args) => {
            return await Settings.findOne({
                user:  args.user
            }).populate('user');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            console.log(user);
            const token = signToken(user);
            return { token, user };
        },
        updateUserPets: async (parent,{ _id, dog }) => {
            return await User.findByIdAndUpdate(_id, {$push: {pets: dog}}, { new:true }).populate('pets');
        },
        login: async (parent, { email, password }, context) => {
            console.log(email, password);
            const user = await User.findOne({email});
            console.log(user);
            if(!user) {
                throw new AuthenticationError('Incorrect email or password');
            }

            //Check user password
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect email or password');
              }

            const token = signToken(user);
            return { token, user };
            },
        addSettings: async (parent, args) => {
            return await Settings.create(args);
        },
        updateSettings: async (parent, args) => {
            return await Settings.updateOne({user:args._id}, {args}, { new:true });
        }
    }
};

module.exports = resolvers;