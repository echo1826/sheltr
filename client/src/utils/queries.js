
import {gql} from "@apollo/client";

export const QUERY_ME = gql`
query me {
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
`;

export const QUERY_SINGLE_USER = gql`
    query getOneUser($id: ID!) {
        user(_id: $id){
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
`;

export const QUERY_ALL_DOGS = gql`
    query getAllDogs {
        dogs{
        _id
        name
        breed {
        primary
        secondary
        mixed
        unknown
        }
        age
        gender
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
`;

export const QUERY_SETTINGS = gql`
    query getSettings($userId: ID!) {
        settings(userId: $userId) {
        _id
        userId{
            username
            pets {
                _id
                name
                breed {
                primary
                secondary
                mixed
                unknown
                }
                age
                gender
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
        age
        size
        house_trained
        }
    }
`;

export const ALL_USERS = gql`
    query allUsers {
        _id
        username
        email
    }
`;