// Detailed view of each dog that the user has liked/swiped right on
import React from "react";
// imports from material
import {Grid}  from '@mui/material';
import Paper from '@mui/material/Paper';



export default function LikedCards(props) {
    // const profileDogs = props.likedDogs.slice(0,5) //dont need later. just for testing

    function yesNo (e) {
        if (e === true) {
            return 'Yes'
        }else{
            return 'No'
        }
    }

    console.log(props.likedDogs);

    return(<div>
        
        {props.likedDogs.map((dog) => {
           return ( 
            <Paper elevation = {6} >
                <Grid item xs={4} key={dog._id} flex flexWrap="wrap" margin = "10px" maxWidth="90vw" alignItems="center" justifyContent="center" container ={true} fontFamily="Oxygen">
                        <img src={dog.photo[0].small} alt='dog' />
                        <h2>{dog.name}</h2>
                        <div></div>
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
                        <a href={dog.url} target='_blank' rel="noreferrer noopener">Learn more...</a>
                    </Grid>
                </Paper>
        )
        })}
        
    
    </div>);
}