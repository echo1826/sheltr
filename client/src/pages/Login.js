import React, { useState } from "react";
import Profile from "./Profile.js";
// import from utils
import Auth from "../utils/auth";
// import from components
import LoginComp from "../components/Login/index.js";
import Signup from '../components/Signup/index'
// import from material
import Button from '@mui/material/Button'

export default function Login() {
  const [renderState, setRenderState] = useState({ comp: true });

  const handleChange = (event) => {
    if (renderState.comp) {
      setRenderState({comp: false});
    } else {
      setRenderState({comp: true});
    }
  };
  
  if (Auth.isLoggedIn()) {
    return <Profile />;
  }

  return (
    <div>
      {renderState.comp ? <LoginComp /> : <Signup />}
      {renderState.comp ? <p>Don't have an account? <Button onClick={handleChange}>Sign Up</Button></p> 
      : <p>Already have an account? <Button onClick={handleChange}>Log In</Button></p>}
    </div>
  );
}
