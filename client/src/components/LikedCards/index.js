// Detailed view of each dog that the user has liked/swiped right on
import React from "react";
import {Grid}  from '@mui/material';
import Paper from '@mui/material/Paper';



export default function LikedCards(props) {
    const profileDogs = props.likedDogs.slice(0,5) //dont need later. just for testing

    function yesNo (e) {
        if (e === true) {
            return 'Yes'
        }else{
            return 'No'
        }
    }

    console.log(profileDogs);

    return(<div>
        
        {profileDogs.map((dog) => {
           return ( 
                <Grid item xs={4} key={dog._id} >
                    <Paper>
                        <img src={dog.photo[0].medium} alt='photo of dog'/>
                        <h2>{dog.name}</h2>
                        <p>{dog.breed.primary}</p>
                        <p>{dog.size} | {dog.gender} | {dog.age}</p>
                        <ul>
                            <li>Shelter/Organization: {dog.organization}</li>
                            <li>Location: {dog.location}</li>
                            <li>Spayed: {yesNo(dog.spayed)}</li>
                            <li>House Trained: {yesNo(dog.house_trained)}</li>
                            <li>Shots: {yesNo(dog.shots)}</li>
                        </ul>
                        <h3>Meet {dog.name}!</h3>
                        <p>{dog.description}</p>
                        <a href={dog.url} target='_blank'>Learn more...</a>
                    </Paper>
                </Grid>
        )
        })}
        
    
    </div>);
}