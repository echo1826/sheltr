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

    type Dog {
        _id: ID
        name: String
        breed: Breed
        age: String
        size: String
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
        pets: [Dog] 
    }
    
    type Auth {
        token: ID
        user: User
    }

    type Settings {
      _id: ID
      userId: User
      age: String
      size: String
      spayed: Boolean
      house_trained: Boolean
  }
    
    type Query {
        user(_id: ID!): User
        ageSizeSpayedHouseTrained(age: String, size: String, spayed: Boolean, house_trained:Boolean): [Dog]
        ageSizeSpayed(age: String, size: String, spayed: Boolean): [Dog]
        ageSizeHouseTrained(age: String, size: String, house_trained: Boolean): [Dog]
        ageSpayedHouseTrained(age: String, spayed: Boolean, house_trained: Boolean): [Dog]
        sizeHouseTrainedSpayed(size: String, house_trained: Boolean, spayed: Boolean): [Dog]
        ageSpayed(age: String, spayed: Boolean): [Dog]
        ageHouseTrained(age: String, house_trained: Boolean): [Dog]
        ageSize(age: String, size: String): [Dog]
        spayedSize(spayed: Boolean, size: String): [Dog]
        spayedHouseTrained(spayed: Boolean, house_trained: Boolean): [Dog]
        spayed(spayed: Boolean): [Dog]
        sizeHouseTrained(size: String, house_trained: Boolean): [Dog]
        size(size: String): [Dog]
        houseTrained(house_trained: Boolean): [Dog]
        age(age: String): [Dog]
        dogs: [Dog]
        settings(userId: ID!): Settings
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addSettings(userId: ID!): Settings
        updateUserPets(_id: ID!, pets: [String]): User
        updateSettings(userId: ID!): Settings
        login(email: String!, password: String!): Auth
      }
    `;

module.exports = typeDefs;