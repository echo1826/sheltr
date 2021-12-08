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
    const removePet = async (dogId) => {
        const {data} = await props.removeUserPets({
            variables: {
                userId: Auth.getProfileToken().data._id,
                dog: dogId
            }
        });
        window.location.reload();
    }

    return(<div>
            <Paper elevation = {6} style={{borderRadius: 15}} >
                <Grid item xs={4} key={dog._id} container ={true} className='likedDogsContainer' style={{ marginBottom:15, maxWidth:"90vw", alignItems:"center", justifyContent:"center", fontFamily:"Oxygen"}}>
                <button className='likesXBtn'><img src='./images/x.png' className='likesXImg'></img></button>
                        <img src={dog.photo[0].medium} alt='dog' />
                        <div className='likedDogsEx'>
                            <h2>{props.dog.name}</h2>
                            <p>{props.dog.breed.primary}</p>
                            <p>{props.dog.size} | {props.dog.gender} | {props.dog.age}</p>
                        </div>
                        <div>
                            <ul>
                                <li>Shelter/Organization: {props.dog.organization}</li>
                                <li>Location: {props.dog.location}</li>
                                <li>Spayed: {yesNo(props.dog.spayed)}</li>
                                <li>House Trained: {yesNo(props.dog.house_trained)}</li>
                                <li>Shots: {yesNo(props.dog.shots)}</li>
                            </ul>
                        </div>
                        <div className='likedDogsMeet'>
                            <h3>Meet {props.dog.name}!</h3>
                        </div>
                        <p>{props.dog.description}</p>
                        <a href={props.dog.url} target='_blank' rel="noreferrer noopener">Learn more...</a>
                    </Grid>
                </Paper>
    </div>);
}