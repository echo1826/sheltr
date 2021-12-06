import React, { useState } from "react";
import ReactDOM from "react-dom";
import Auth from "../utils/auth";
import Profile from "./Profile.js";
import LoginComp from "../components/Login/index.js";
import Signup from '../components/Signup/index'

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
    <div>
      {renderState.comp ? <LoginComp /> : <Signup />}
      {renderState.comp ? <p>Don't have an account? <button onClick={handleChange}>Sign Up</button></p> 
      : <p>Already have an account? <button onClick={handleChange}>Log In</button></p>}
    </div>
  );
}
