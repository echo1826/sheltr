import React from "react";
import ReactDOM from 'react-dom';
import LikedCards from '../components/LikedCards/index';
import { Grid } from '@mui/material';

export default function Likes() {

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