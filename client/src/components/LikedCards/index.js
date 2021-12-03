// Detailed view of each dog that the user has liked/swiped right on
import React from "react";
import ReactDOM from 'react-dom';
import { Grid } from '@mui/material';
// need to import likedDogs array

export default function LikedCards() {

    function yesNo (e) {
        if (e === false) {
            return 'Yes'
        }else{
            return 'No'
        }
    }

    return(<div>

    {likedDogs.map((dog) => {
        <Grid key={dog._id} item xs={12} md={6} lg={4}>
            
            <Item>
                <img src={dog.photo[0].small} alt='photo of dog'/>
                <h2>{dog.name}</h2>
                <p>{dog.breed.primary}</p>
                <p>{dog.size} | {dog.gender} | {dog.age}</p>
                <ul>
                    <li>Shelter/Organization: {dog.organization}</li>
                    <li>Location: {dog.location}</li>
                    <li>Spayed: {yesNo(dog.spayed)}</li>
                    <li>House Trained: {yesNo(dog.house_trained)}</li>
                    <li>Shots: {yesNo(dog.shots)}</li>
                    <a href={dog.url}>Adpot this Dog!</a>
                </ul>
                <h3>Meet {dog.name}!</h3>
                <p>{dog.description}</p>
            </Item>
            
        </Grid>
    })}
    
    </div>);
}