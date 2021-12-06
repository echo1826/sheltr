import React from "react";
import { useQuery } from "@apollo/client";
// import from components
import Cardrender from "../components/Cardrender";
import "./Cards.css";
// import from utils
import { QUERY_SETTINGS } from "../utils/queries";
import Auth from "../utils/auth";
// import from material
import Button from "@mui/material/Button";

export default function Cards() {
  const {loading, data} = useQuery(QUERY_SETTINGS, {
      variables: {userId: Auth.getProfileToken().data._id}
  });
  let settings;
  let likedDogs;
  if(loading) {
      return <div>Loading settings...</div>
  } else {
      settings = data?.settings;
      likedDogs = data?.settings.userId.pets;
  }

  const goLogin = (event) => {
    window.location.assign("/");
  };

  if (Auth.isLoggedIn()) {
    return (
      <div className="cards">
        <Cardrender settings={settings} likedDogs={likedDogs}/>
      </div>
    );
  } else {
    const style = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    };

    return (
      <div style={style}>
        <h1>You are not logged in!!</h1>
        <Button onClick={goLogin}>Login</Button>
      </div>
    );
  }
}
