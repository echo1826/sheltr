const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        pasword: String
        pets: [Dog] 
    }

    type Settings {
        _id: ID
        userId: User
        age: String
        size: String
        spayed: Boolean
        house_trained: Boolean

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

    type Auth {
        token: ID
        user: User
    }
    
    type Query {
        users: [User]
        dogs: [Dog]
        user(_id: ID!): User
        settings(userId: ID!): Settings
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        updateUserPets(_id: ID!, pet: [Dog]): User
        updateSettings(userId: ID!): Settings

    }
    `;

module.exports = typeDefs;