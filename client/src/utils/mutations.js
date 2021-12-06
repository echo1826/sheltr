import {
  gql
} from '@apollo/client'

export const LOGIN = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql `
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


export const ADD_SETTINGS = gql `
mutation addSettings($user: ID!, $age: String, $size: String, $house_trained: Boolean) {
  addSettings(user: $user, age: $age, size:$size, house_trained:$house_trained) {
    _id
    age
    size
    spayed
    house_trained
  }
}
`;

export const UPDATE_SETTINGS = gql `
  mutation updateSettings(
    $userId: ObjectId!
    $age: String!
    $size: String!
    $house_trained: Boolean!
  ) {
      updateSettings(
          userId: $userId
          age: $age
          size: $size
          house_trained: $house_trained
      ) {
        _id
        age
        size
        house_trained
      }
  }
`;

export const UPDATE_USER_PETS = gql `
  mutation updateUserPets(
    $_id: ObjectId!
    $dog: ObjectId!
  ) {
      updateUserPets (
          _id: $_id
          dog: $dog
      ) {
        username
        email
        pets{
          _id
          name
        }
      }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser(
    $_id: ObjectId!
  ) {
    removeUser (
      _id: $_id
    )
  }
`;