import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import { 
    QUERY_ALL_DOGS, 
} from "../../utils/queries";
import {UPDATE_USER_PETS} from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import './Cards.css';

export default function Cardrender(props) {
    const [lastDirection, setLastDirection] = useState();
    
    const settings = props.settings;
    const {loading, data} = useQuery(QUERY_ALL_DOGS);
    const [updateUserPets] = useMutation(UPDATE_USER_PETS);
    const dogs = data?.dogs;
    let dogCardData;
    if(loading) {
        return <div>Loading cards...</div>
    }
    console.log(dogCardData);
    console.log(props.settings);
    if(data?.dogs.length !== 0) {
        switch(true) {
            case ((settings.age !== null) && (settings.size !== null) && (settings.house_trained !== null)): {
                console.log("age, size, houseTrained firing")
                dogCardData = dogs.filter((dog) => (dog.age === settings.age) && (dog.size === settings.size) && (dog.house_trained === settings.house_trained));
                // setCurrentIndex(dogCardData.length - 1);
                break;
            }
            case ((settings.age !== null) && (settings.size !== null)): {
                console.log("age, size firing");
                dogCardData = dogs.filter((dog) => (dog.age === settings.age) && (dog.size === settings.size));
                // setCurrentIndex(dogCardData.length - 1);
                break;
            }
            case ((settings.age !== null) && (settings.house_trained !== null)): {
                console.log("age, houseTrained firing");
                dogCardData = dogs.filter((dog) => (dog.age === settings.age) && (dog.house_trained === settings.house_trained));
                // setCurrentIndex(dogCardData.length - 1);
                break;
            }
            case ((settings.age !== null)): {
                console.log("settings.age case firing");
                dogCardData = dogs.filter((dog) => dog.age === settings.age);
                // setCurrentIndex(dogCardData.length - 1);
                break;
            }
            case((settings.size !== null) && (settings.house_trained !== null)): {
                console.log("size, houseTrained firing");
                dogCardData = dogs.filter((dog) => (dog.size === settings.size) && (dog.house_trained === settings.house_trained));
                // setCurrentIndex(dogCardData.length - 1);
                break;
            }
            case((settings.size !== null)): {
                console.log("size firing");
                dogCardData = dogs.filter((dog) => dog.size === settings.size);
                // setCurrentIndex(dogCardData.length - 1);
                break;
            }
            case((settings.house_trained !== null)): {
                console.log("houseTrained firing");
                dogCardData = dogs.filter((dog) => dog.house_trained === settings.size);
                // setCurrentIndex(dogCardData.length - 1);
                break;
            }
            default: {
                dogCardData = dogs;
                // setCurrentIndex(dogCardData.length - 1);
                break;
            }
        }
    }
    
    const swiped = async (direction) => {
        setLastDirection(direction);
        
      }
    const outOfFrame = async (direction, id) => {
        console.log("Dog id", id, "\nDirection", direction);
        if(direction === 'right') {
            try {
                const {data} = await updateUserPets({
                    variables: {_id: Auth.getProfileToken().data._id, dog: id}
                })
            }catch(err) {
                console.log(err);
            }
            
        }
    }
    console.log(dogCardData);
    return(<div className='cardContainer'>
        {dogCardData.map((dog) => {
            return(
            <TinderCard className='swipe' key={dog._id} onSwipe={(direction) => swiped(direction)} onCardLeftScreen={(direction) => outOfFrame(direction, dog._id)}>
                <img src={dog.photo[0].medium} alt={dog.name}/>
                <h2>{dog.name}</h2>
                <p>{dog.location}</p>
            </TinderCard>)
        })}
        {lastDirection ? <h2>You swiped {lastDirection}</h2> : <h2></h2>}
    </div>)
}