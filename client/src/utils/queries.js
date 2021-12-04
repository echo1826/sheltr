import {gql} from "@apollo/client";

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

export const QUERY_SETTINGS = gql`
    query getUserSettings($user: ID!) {
        settings(user: $user) {
            _id
            user{
                username
            }
            age
            size
            spayed
            house_trained
        }
    }
`;

export const QUERY_AGE_SIZE_SPAYED_HOUSE_TRAINED = gql`
    query ageSizedSpayedHouseTrained($age:String, $size:String, $spayed:Boolean, $house_trained:Boolean) {
        ageSizeSpayedHouseTrained(age: $age, size:$size, spayed:$spayed, house_trained:$house_trained) {
            _id
            name
            location
        }
    }
`;

export const QUERY_AGE_SIZE_SPAYED = gql`
    query ageSizeSpayed($age:String, $size:String, $spayed:Boolean) {
        ageSizeSpayed(age: $age, size: $size, spayed:$spayed) {
            _id
            name
            location
        }
    }
`;

export const QUERY_AGE_SIZE_HOUSE_TRAINED = gql`
    query ageSizeHouseTrained($age: String, $size: String, $house_trained:Boolean){
        ageSizeHouseTrained(age: $age, size: $size, house_trained:$house_trained){
            _id
            name
            location
        }
    }
`;

export const QUERY_AGE_SPAYED_HOUSE_TRAINED = gql`
    query ageSpayedHouseTrained($age: String, $spayed: Boolean, $house_trained: Boolean) {
        ageSpayedHouseTrained(age: $age, spayed: $spayed, house_trained: $house_trained){
            _id
            name
            location
        }
    }
`;

export const QUERY_SIZE_HOUSE_TRAINED_SPAYED = gql`
    query sizeHouseTrainedSpayed($size: String, $house_trained: Boolean, $spayed: Boolean) {
        sizeHouseTrainedSpayed(size: $size, house_trained:$house_trained, spayed:$spayed) {
            _id
            name
            location
        }
    }
`;

export const QUERY_AGE_SPAYED = gql`
    query ageSpayed($age: String, $spayed: Boolean){
        ageSpayed(age: $age, spayed: $spayed){
        _id
        name
        location
        }
    }
`;

export const QUERY_AGE_HOUSE_TRAINED = gql`
    query ageHouseTrained($age: String, $house_trained: Boolean){
        ageHouseTrained(age: $age, house_trained: $house_trained){
            _id
            name
            location
        }
    }
`;

export const QUERY_AGE_SIZE = gql`
    query ageSize($age: String, $size: String){
        ageSize(age: $age, size:$size) {
            _id
            name
            location
        }
    }
`;

export const QUERY_SPAYED_SIZE = gql`
    query spayedSize($spayed:Boolean, $size:String){
        spayedSize(spayed: $spayed, size:$size){
            _id
            name
            location
        }
    }
`;

export const QUERY_SPAYED_HOUSE_TRAINED = gql`
    query spayedHouseTrained($spayed:Boolean, $house_trained: Boolean){
        spayedHouseTrained(spayed: $spayed, house_trained:$house_trained){
            _id
            name
            location
        }
    }
`;

export const QUERY_SPAYED = gql`
    query spayed($spayed:Boolean) {
        spayed(spayed: $spayed){
            _id
            name
            location
        }
    }
`;

export const QUERY_SIZE_HOUSE_TRAINED = gql`
    query sizeHouseTrained($size: String, $house_trained: Boolean){
        sizeHouseTrained(size: $size, house_trained: $house_trained){
            _id
            name
            location
        }
    }
`;

export const QUERY_SIZE = gql`
    query size($size: String){
        size(size: $size){
            _id
            name
            location
        }
    }
`;

export const QUERY_HOUSE_TRAINED = gql`
    query houseTrained($house_trained: Boolean){
        houseTrained(house_trained: $house_trained){
            _id
            name
            location
        }
    }
`;

export const QUERY_AGE = gql`
    query age($age: String){
        age(age:$age){
            _id
            name
            location
        }
    }
`;