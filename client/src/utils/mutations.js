import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_SETTINGS = gql`
  mutation addSettings(
    $userId: ObjectId!
  ) {
    addSettings(
        userId: $userId,
        age: 'Young',
        size: 'Medium',
        spayed: 'true',
        house_trained: 'true'
    )
    }
  }
`;

export const UPDATE_SETTINGS = gql`
  mutation updateSettings(
    $userId: ObjectId!
    $age: String!
    $size: String!
    $spayed: Boolean!
    $house_trained: Boolean!
  ) {
      updateSettings(
          userId: $userId
          age: $age
          size: $size
          spayed: $spayed
          house_trained: $house_trained
      )
  }
`;

export const UPDATE_USER_PETS = gql`
  mutation updateUserPets(
    $_id: ObjectId!
    $petId: ObjectId!
  ) {
      updateUserPets (
          _id: $_id
          petId: $petId
      )
  }
`;