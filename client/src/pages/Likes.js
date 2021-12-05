import React from "react";
import LikedCards from '../components/LikedCards/index';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useQuery } from "@apollo/client";
import {QUERY_ME} from '../utils/queries';
import Auth from '../utils/auth';

export default function Likes() {
    const {loading, data} = useQuery(QUERY_ME);
    const likedDogs = data?.user.pets || [];

    if(loading) {
       return <div>...loading</div> 
    }

    if(!likedDogs.length) {
        return <h3>No liked dogs yet!</h3>
    } 

console.log(likedDogs);

    return(
        <Box sx={{ flexGrow: 1 }}>

            <Grid container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
                <Grid item>
                <h2>Your Liked Dogs</h2>
                </Grid>
                <LikedCards likedDogs={likedDogs}/>
            </Grid>

        </Box>
  
    )
}