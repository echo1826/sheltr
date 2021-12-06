import React, { useState } from "react";
// imported utils files
import Auth from "../utils/auth";
// imported page files
import Profile from "./Profile.js";
// imported component files
import LoginComp from "../components/Login/index.js";
import Signup from '../components/Signup/index'
// imported mui componets
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
// imported custom css
import './Login.css';


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
    <Grid container className="card">
          <Paper elevation = {6} >
          <h2 align="center" style={{margin: '2vh 10vw 5vh 10vw'}}>Search hundreds of animal rescue organizations to find your perfect rescue dog.</h2>
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

