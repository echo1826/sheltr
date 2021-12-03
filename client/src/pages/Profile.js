import React from "react";
import ReactDOM from 'react-dom';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Likes from './Likes'
import profileImg from '../../public/images/profilefilled.png'
// need to import likedDogs array

export default function Profile() {

    const profileDogs = likedDogs.slice(0,3); 

    return(<div>
        <h1>My Profile</h1>
        <Grid container spacing={2} rowSpacing={3}
        container direction="row"
        justifyContent="center"
        alignItems="center"
        >
            <Grid container>
                <Item>
                    <Avatar alt="User photo" src={profileImg} />
                </Item>
                <FormRow />
            </Grid>

            {profileDogs.map((dog) => {
                <Grid key={dog._id} container item xs={4} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Item>
                        <img src={dog.photo[0].small} alt='photo of dog'/>
                        <h2>{dog.name}</h2>
                        <p>{dog.breed.primary}</p>
                        <p>{dog.size} | {dog.gender} | {dog.age}</p>
                    </Item>
                    <FormRow />
                </Grid>
            })}

            <Grid container>
                <Item>
                    <a href={Likes}>View all your liked dogs</a>
                </Item>
                <FormRow />
            </Grid>
        </Grid>
    </div>);
}