import React from "react";
import Cardrender from "../components/Cardrender";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_DOGS, QUERY_SETTINGS } from "../utils/queries";
import "./Cards.css";
import Button from "@mui/material/Button";
import Auth from "../utils/auth";

export default function Cards() {
  // const {loading, data} = useQuery(QUERY_SETTINGS, {
  //     variables: // give user id here to get user settings
  // });
  // let settings;
  // if(loading) {
  //     return <div>Loading settings...</div>
  // } else {
  //     settings = data?.settings;
  // }

  const goLogin = (event) => {
    window.location.assign("/");
  };

  if (Auth.isLoggedIn()) {
    return (
      <div className="cards">
        <Cardrender />
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
