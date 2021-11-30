const {User, Dog} = require("../models");

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
    }
};

module.exports = resolvers;