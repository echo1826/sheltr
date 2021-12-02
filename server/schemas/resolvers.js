const {User, Dog} = require("../models");
const { signToken } = require('../utils/auth.js');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('dogs')
        },
        dogs: async () => {
            return await Dog.find({});
        },
        user: async (parent, args) => {
            return await User.findById(args.id).populate('dogs');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {

            const token = signToken(user);
            return {token, user};
        }
    }
};

module.exports = resolvers;