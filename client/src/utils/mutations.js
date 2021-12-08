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
mutation addSettings($userId: ID!, $age: String, $size: String, $house_trained: Boolean) {
  addSettings(userId: $userId, age: $age, size:$size, house_trained:$house_trained) {
    _id
    userId {
      username
    }
    age
    size
    house_trained
  }
}
`;

export const UPDATE_SETTINGS = gql `
mutation updateSettings($userId: ID!, $age:String, $size:String,$house_trained:Boolean) {
  updateSettings(userId: $userId, age: $age, size: $size, house_trained: $house_trained) {
    _id
    userId {
      username
    }
    age
    size
    house_trained
  }
}
`;

export const UPDATE_USER_PETS = gql `
  mutation updateUserPets(
    $_id: ID!
    $dog: ID!
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
    $_id: ID!
  ) {
    removeUser (
      _id: $_id
    ){
      _id
      username
    }
  }
`;

export const REMOVE_USER_PETS = gql`
  mutation removeUserPets($dog: ID!) {
    removeUserPets(dog: $dog) {
      username
      email
      password
      pets {
          name
          breed {
            primary
            secondary
            mixed
            unknown
          }
          age
          size
          gender
          photo {
            small
            medium
            large
            full
          }
          url
          location
          description
          spayed
          house_trained
          shots
          organization
      }
    }
  }
`