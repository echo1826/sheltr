// Detailed view of each dog that the user has liked/swiped right on
import React from "react";
// imports from material
import {Grid}  from '@mui/material';
import Paper from '@mui/material/Paper';
import Auth from "../../utils/auth";

export default function LikedCards(props) {

    function yesNo (e) {
        if (e === true) {
            return 'Yes'
        }else{
            return 'No'
        }
    }
    const removePet = async (animalId) => {
        await props.removeUserPets({
            variables: {
                userId: Auth.getProfileToken().data._id,
                animal: animalId
            }
        });
        window.location.reload();
    }

    return(<div>
            <Paper elevation = {6} style={{borderRadius: 15}} >
                <Grid item xs={4} key={props.animal._id} container ={true} className='likedDogsContainer' style={{ marginBottom:15, maxWidth:"90vw", alignItems:"center", justifyContent:"center", fontFamily:"Oxygen"}}>
                <button className='likesXBtn' onClick={() => removePet(props.animal._id)}><img src='./images/x.png' className='likesXImg' alt='x-out'></img></button>
                        <img src={props.animal.photo[0].medium} alt='dog' />
                        <div className='likedDogsEx'>
                            <h2>{props.animal.name}</h2>
                            <p>{props.animal.size} | {props.animal.gender} | {props.animal.age}</p>
                        </div>
                        <div>
                            <ul>
                                <li>Shelter/Organization: {props.animal.organization}</li>
                                <li>Location: {props.animal.location}</li>
                                <li>Spayed: {yesNo(props.animal.spayed)}</li>
                                <li>House Trained: {yesNo(props.animal.house_trained)}</li>
                                <li>Shots: {yesNo(props.animal.shots)}</li>
                            </ul>
                        </div>
                        <div className='likedDogsMeet'>
                            <h3>Meet {props.animal.name}!</h3>
                        </div>
                        <p>{props.animal.description}</p>
                        <a href={props.animal.url} target='_blank' rel="noreferrer noopener">Learn more...</a>
                    </Grid>
                </Paper>
    </div>);
}