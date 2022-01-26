const {
    User,
    Animal,
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
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({_id: context.user._id}).populate('pets');
            }
        },
        animals: async () => {
            return await Animal.find({});
        },
        user: async (parent, args) => {
            const user = await User.findOne({ _id: args._id}).populate('pets');

      if (!user) {
        throw new AuthenticationError("Not logged in or user does not exisit");
      }

            return user;
        },
        settings: async (parent, args) => {
            return await Settings.findOne({
                userId:  args.userId
            }).populate('userId').populate('pets');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            await Settings.create({userId: user._id, age: null, size: null, house_trained: null, animals: null});

            const token = signToken(user);
            return { token, user };
        },
        updateUserPets: async (parent,{ _id, animal }) => {
            return await User.findByIdAndUpdate(_id, {$push: {pets: animal}}, { new:true }).populate('pets');
        },
        login: async (parent, { email, password }, context) => {
            const user = await User.findOne({email});
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
            const res = await Settings.updateOne({userId:args.userId}, {animals: args.animals, age: args.age, size: args.size, house_trained: args.house_trained}, { upsert: true });
            const settings = await Settings.findOne({userId: args.userId}).populate('userId');
            return settings;
        },
        removeUser: async (parent, args) => {
            return await User.findOneAndDelete({_id: args._id})
        },
        removeUserPets: async(parent, args) => {
            await User.updateOne({_id: args.userId}, {$pull: {pets: args.animal}}, {new: true});
            const user = await User.findOne({_id: args.userId}).populate('pets');
            return user;
        }
    }
};

module.exports = resolvers;
