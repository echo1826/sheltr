import React from "react";
import ReactDOM from 'react-dom';
import LikedCards from '../components/LikedCards/index';
import { Grid } from '@mui/material';
import { useQuery } from "@apollo/client";
import {QUERY_ALL_DOGS} from '../utils/queries'

export default function Likes() {
    // const {loading, data} = useQuery(QUERY_ALL_DOGS)
    // const likedDogs = data?.dogs || [];

    return(
 
    <Grid container spacing={2}
        container direction="row"
        justifyContent="center"
        alignItems="center"
    >
   
        <h1>Your Liked Dogs</h1>
        <LikedCards />
    
    </Grid>
  
    )
}