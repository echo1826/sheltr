const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        pasword: String
        pets: [Dog] 
    }
    
    type Dog {
        _id: ID
        name: String
    }
    
    type Query {
        users: [User]
        dogs: [Dog]
        user(id: ID!): User
    }
    `;

module.exports = typeDefs;