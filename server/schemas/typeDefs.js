const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Breed {
        primary: String
        secondary: String
        mixed: Boolean
        unknown: Boolean
    }
    
    type Photo {
        small: String
        medium: String
        large: String
        full: String
    }

    type Animal {
        _id: ID
        type: String
        name: String
        breed: Breed
        age: String
        size: String
        gender: String
        photo: [Photo]
        url: String
        location: String
        description: String
        spayed: Boolean
        house_trained: Boolean
        shots: Boolean
        organization: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        createdAt: String
        location: String
        pets: [Animal] 
    }
    
    type Auth {
        token: ID
        user: User
    }

    type Settings {
      _id: ID
      userId: User
      animals: String
      age: String
      size: String
      house_trained: Boolean
  }
    
    type Query {
        me: User
        user(_id: ID!): User
        animals: [Animal]
        settings(userId: ID!): Settings
    }

    type Mutation {
        addUser(username: String!, email: String!,location: String!, password: String!): Auth
        addSettings(userId: ID!, animals: String,age: String, size: String, house_trained: Boolean): Settings
        updateUserPets(_id: ID!, animal: ID!): User
        updateSettings(userId: ID!, animals: String, age: String, size: String, house_trained: Boolean): Settings
        login(email: String!, password: String!): Auth
        removeUser(_id: ID!): User
        removeUserPets( userId: ID!, animal: ID!): User
      }
    `;

module.exports = typeDefs;