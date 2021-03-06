import React, { useState } from "react";
// imported utils files
import Auth from "../utils/auth";
// imported page files
import Profile from "./Profile.js";
// imported component files
import LoginComp from "../components/Login/index.js";
import Signup from "../components/Signup/index";
// imported mui componets
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
// imported custom css
import "./Login.css";

export default function Login() {
  const [flipState, setFlipState] = useState("content");

  const flipChange = (event) => {
    if (flipState === "content") {
      setFlipState("content contentTwo");
    } else {
      setFlipState("content");
    }
  };
  
  if (Auth.isLoggedIn()) {
    return <Profile />;
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridAutoColumns: "1fr",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container className="login-signupContainer">
          <Paper elevation={6} className="login-signupCard">
            <h2
              align="center"
              className='titleFont'
            >
              Search hundreds of animal rescue organizations to find your
              perfect rescue pet.
            </h2>
            <Grid item className="flippyCard">
              <div className={flipState}>
                <LoginComp flipChange={flipChange}/>
                <Signup flipChange={flipChange}/>
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
