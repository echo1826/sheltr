import React, { useState } from "react";
import ReactDOM from "react-dom";
import Signup from "../components/Signup/index";

import Auth from "../utils/auth";
import Profile from "./Profile.js";
import LoginComp from "../components/Login/index.js";

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
      <button onClick={handleChange}>{renderState.comp ? "SignUp" : "Login"}</button>
    </div>
  );
}
