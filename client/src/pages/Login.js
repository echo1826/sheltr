import React, { useState } from "react";
import Auth from "../utils/auth";
import Profile from "./Profile.js";
import LoginComp from "../components/Login/index.js";
import Signup from '../components/Signup/index'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";


export default function Login() {
  const [renderState, setRenderState] = useState({ comp: true });

  const handleChange = (event) => {
    if (renderState.comp) {
      setRenderState({comp: false});
    } else {
      setRenderState({comp: true});
    }
  };
  console.log(Auth.isLoggedIn());
  if (Auth.isLoggedIn()) {
    return <Profile />;
  }

  return (
    <Box sx={{
      display: 'grid',
      gridAutoColumns: '1fr',
      gap: 3,
      alignItems: 'center',
    }}
  >
  <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"

  >
    <Grid container className="card" margin="5%" padding="5%">
          <Paper elevation = {6} >
          <h2 align="center">About Sheltr</h2>
          <p align="center">Search hundreds of animal rescue organizations to find your perfect rescue dog.</p>
      <Grid item className ="content">
      {renderState.comp ? <LoginComp /> : <Signup />}
      {renderState.comp ? <p align="center">Don't have an account? <Button onClick={handleChange}>Sign Up</Button></p> 
      : <p align="center">Already have an account? <Button onClick={handleChange}>Log In</Button></p>}
    </Grid>
    </Paper>
    </Grid>
    </Grid>
    </Box>
  );
}

