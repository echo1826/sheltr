const {User, Dog, Settings} = require("../models");
const { signToken } = require('../utils/auth.js');

const resolvers = {
    Query: {
        dogs: async () => {
            return await Dog.find({});
        },
        user: async (parent, args) => {
            const user = await User.findById(args.id).populate('pets');

            if(!user) {
                throw new AuthenticationError('Not logged in or user does not exisit');
            }

            return user;
        },
        settings: async (parent, args) => {
            return await Settings;
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

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
        }
    },
};

module.exports = resolvers;