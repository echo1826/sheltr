import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import { 
    QUERY_ALL_DOGS, 
} from "../../utils/queries";
import {UPDATE_USER_PETS} from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

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

    if(data?.dogs.length !== 0) {
        switch(true) {
            case ((settings.age !== null) && (settings.size !== null) && (settings.house_trained !== null)): {
                
                dogCardData = dogs.filter((dog) => (dog.age === settings.age) && (dog.size === settings.size) && (dog.house_trained === settings.house_trained));
                break;
            }
            case ((settings.age !== null) && (settings.size !== null)): {
                
                dogCardData = dogs.filter((dog) => (dog.age === settings.age) && (dog.size === settings.size));
                break;
            }
            case ((settings.age !== null) && (settings.house_trained !== null)): {
               
                dogCardData = dogs.filter((dog) => (dog.age === settings.age) && (dog.house_trained === settings.house_trained));
                break;
            }
            case ((settings.age !== null)): {
                
                dogCardData = dogs.filter((dog) => dog.age === settings.age);
                break;
            }
            case((settings.size !== null) && (settings.house_trained !== null)): {
                
                dogCardData = dogs.filter((dog) => (dog.size === settings.size) && (dog.house_trained === settings.house_trained));
                break;
            }
            case((settings.size !== null)): {
                
                dogCardData = dogs.filter((dog) => dog.size === settings.size);
                break;
            }
            case((settings.house_trained !== null)): {
                
                dogCardData = dogs.filter((dog) => dog.house_trained === settings.house_trained);
                break;
            }
            case((settings.house_trained === null && settings.size === null && settings.age === null)): {
                
                dogCardData = dogs;
                break;
            }
            default: {
                
                break;
            }
        }
    }
    const dogsToFilter = props.likedDogs.map((dog) => dog._id);
    const finalDogData = dogCardData.filter((dog) => {
        return !dogsToFilter.includes(dog._id);
    });
    const swiped = async (direction) => {
        setLastDirection(direction);
      }
    const outOfFrame = async (direction, id) => {
        
        if(direction === 'right') {
            try {
                    await updateUserPets({
                    variables: {_id: Auth.getProfileToken().data._id, dog: id}
                })
            }catch(err) {
                console.log(err);
            }
        }
    }
    if(dogCardData.length === 0) {
        return (
            <div>No Dogs Found! Change your filter settings to get more dogs!</div>
        )
    }

    return(<div className='tinderContainer'>
        {finalDogData.map((dog) => {

            return(
            <TinderCard className='swipe' key={dog._id} onSwipe={(direction) => swiped(direction)} onCardLeftScreen={(direction) => outOfFrame(direction, dog._id)}>
                <img src={dog.photo[0].medium} alt={dog.name} className = "swipeImg"/>
               <h2 className="swipeDogName">{dog.name} <i className="swipeDogAge">{dog.age}</i></h2>

                <p className="swipeDogLocation">{dog.organization}<div className="swipeDogOrg">{dog.location}</div></p>
            </TinderCard>)
        })}
        {lastDirection ? <h2>You swiped {lastDirection}</h2> : <div></div>}
    </div>)
}

