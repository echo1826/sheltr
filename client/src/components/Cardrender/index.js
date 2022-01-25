import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import { 
    QUERY_ALL_ANIMALS, 
} from "../../utils/queries";
import {UPDATE_USER_PETS} from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

export default function Cardrender(props) {
    const [lastDirection, setLastDirection] = useState();
    
    const settings = props.settings;
    const {loading, data} = useQuery(QUERY_ALL_ANIMALS);
    const [updateUserPets] = useMutation(UPDATE_USER_PETS);
    let animals = data?.animals;
    let cardData;
    if(loading) {
        return <div>Loading cards...</div>
    }

    if(data?.animals.length !== 0) {
        switch(true) {
            case ((settings.age !== null) && (settings.size !== null) && (settings.house_trained !== null) && (settings.animals !== null)): {
                
                cardData = animals.filter((animal) => (animal.age === settings.age) && (animal.size === settings.size) && (animal.house_trained === settings.house_trained) && (animal.type === settings.animals));
                break;
            }

            case ((settings.age !== null) && (settings.size !== null) && (settings.house_trained !== null)): {
                
                cardData = animals.filter((animal) => (animal.age === settings.age) && (animal.size === settings.size) && (animal.house_trained === settings.house_trained));
                break;
            }

            case ((settings.age !== null) && (settings.size !== null) && (settings.animals !== null)): {
                
                cardData = animals.filter((animal) => (animal.age === settings.age) && (animal.size === settings.size) && (animal.type === settings.animals));
                break;
            }

            case ((settings.age !== null) && (settings.house_trained !== null) && (settings.animals !== null)): {
                
                cardData = animals.filter((animal) => (animal.age === settings.age) && (animal.house_trained === settings.house_trained) && (animal.type === settings.animals));
                break;
            }

            case ((settings.size !== null) && (settings.house_trained !== null) && (settings.animals !== null)): {
                
                cardData = animals.filter((animal) => (animal.size === settings.size) && (animal.house_trained === settings.house_trained) && (animal.type === settings.animals));
                break;
            }

            case ((settings.age !== null) && (settings.size !== null)): {
                
                cardData = animals.filter((animal) => (animal.age === settings.age) && (animal.size === settings.size));
                break;
            }

            case ((settings.age !== null) && (settings.house_trained !== null)): {
               
                cardData = animals.filter((animal) => (animal.age === settings.age) && (animal.house_trained === settings.house_trained));
                break;
            }

            case((settings.size !== null) && (settings.house_trained !== null)): {
                
                cardData = animals.filter((animal) => (animal.size === settings.size) && (animal.house_trained === settings.house_trained));
                break;
            }

            case ((settings.age !== null) && (settings.animals !== null)): {
               
                cardData = animals.filter((animal) => (animal.age === settings.age) && (animal.type === settings.animals));
                break;
            }

            case ((settings.house_trained !== null) && (settings.animals !== null)): {
               
                cardData = animals.filter((animal) => (animal.house_trained === settings.house_trained) && (animal.type === settings.animals));
                break;
            }

            case ((settings.size !== null) && (settings.animals !== null)): {
               
                cardData = animals.filter((animal) => (animal.size === settings.size) && (animal.type === settings.animals));
                break;
            }
            
            case ((settings.age !== null)): {
                
                cardData = animals.filter((animal) => animal.age === settings.age);
                break;
            }

            case((settings.size !== null)): {
                
                cardData = animals.filter((animal) => animal.size === settings.size);
                break;
            }

            case((settings.house_trained !== null)): {
                
                cardData = animals.filter((animal) => animal.house_trained === settings.house_trained);
                break;
            }

            case((settings.animals !== null)): {
                
                cardData = animals.filter((animal) => animal.type === settings.animals);
                break;
            }

            case((settings.house_trained === null && settings.size === null && settings.age === null && settings.animals === null)): {
                console.log(`animals = ${animals[0].house_trained}`)
                cardData = animals;
                break;
            }
            
            default: {
                
                break;
            }
        }
    }

    const animalsToFilter = props.likedAnimals.map((animal) => animal._id);
    const finalanimalData = cardData.filter((animal) => {
        return !animalsToFilter.includes(animal._id);
    });
    const swiped = async (direction) => {
        setLastDirection(direction);
      }
    const outOfFrame = async (direction, id) => {
        
        if(direction === 'right') {
            try {
                    await updateUserPets({
                    variables: {_id: Auth.getProfileToken().data._id, animal: id}
                })
            }catch(err) {
                console.log(err);
            }
        }
    }
    if(cardData.length === 0) {
        return (
            <div>No animals found! Change your filter settings to get more animals!</div>
        )
    }

    return(<div className='tinderContainer'>
        {finalanimalData.map((animal) => {

            return(
            <TinderCard className='swipe' key={animal._id} onSwipe={(direction) => swiped(direction)} onCardLeftScreen={(direction) => outOfFrame(direction, animal._id)}>
                <img src={animal.photo[0].medium} alt={animal.name} className = "swipeImg"/>
                <h2 className="swipeanimalName">{animal.name}</h2>
                <p className="swipeanimalLocation">{animal.location}</p>
            </TinderCard>)
        })}
        {lastDirection ? <h2>You swiped {lastDirection}</h2> : <div></div>}
    </div>)
}

