const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        pasword: String
        pets: [Dog] 
    }
    
    type Dog {
        _id: ID
        name: String
        breed: {
            primary: String
            secondary: String
            mixed: Boolean
            unknown: Boolean
        }
        age: String
        size: String
        photo: [{small: String, medium: String, large: String, full: String}]
        url: String
        location: String
        description: String
        spayed: Boolean
        house_trained: Boolean
        shots: Boolean
        organization: String
    }
    
    type Query {
        users: [User]
        dogs: [Dog]
        user(id: ID!): User
    }
    `;

module.exports = typeDefs;