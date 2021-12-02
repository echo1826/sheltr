const {User, Dog} = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('pets')
        },
        dogs: async () => {
            return await Dog.find({});
        },
        user: async (parent, args) => {
            return await User.findById(args.id).populate('pets');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)
            return { token, user };
        },
        updateUserPets: async (parent,{ _id, petId }) => {
            const user = await User.findById(_id).populate('pets');
            const petsArr = user.pets;
            petsArr.push(petId);
            return await User.findByIdAndUpdate(_id, { pets: petsArr }, { new:true });
        }
    }
};

module.exports = resolvers;