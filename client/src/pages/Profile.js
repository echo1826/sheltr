import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Grid } from "@mui/material";
import Likes from "./Likes";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Auth from "../utils/auth";

export default function Profile() {
  const { loading, data } = useQuery(QUERY_ME);
  const likedDogs = data?.dogs || [];

  let profileDogs;
  if (!loading) {
    profileDogs = likedDogs.slice(0, 3);
  }

  const goLogin = (event) => {
    window.location.assign('/');
  }

  if (Auth.isLoggedIn()) {
    return (
      <div>
        <h1>My Profile</h1>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container>
              <React.Fragment>
                <Grid item>
                  <Paper>
                    <Avatar alt="User photo" src="./images/profilefilled.png" />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper>
                    <ul>
                      <li>Username: ABC</li>
                      <li>Username: ABC</li>
                      <li>Username: ABC</li>
                      <li>Username: ABC</li>
                    </ul>
                  </Paper>
                </Grid>
              </React.Fragment>
            </Grid>

            {loading ? (
              <React.Fragment></React.Fragment>
            ) : (
              profileDogs.map((dog) => {
                return (
                  <Grid key={dog._id} container>
                    <React.Fragment>
                      <Grid container item>
                        <Paper>
                          <img src={dog.photo[0].small} alt="photo of dog" />
                          <h2>{dog.name}</h2>
                          <p>{dog.breed.primary}</p>
                          <p>
                            {dog.size} | {dog.gender} | {dog.age}
                          </p>
                        </Paper>
                      </Grid>
                    </React.Fragment>
                  </Grid>
                );
              })
            )}

            <Grid container>
              <React.Fragment>
                <Paper>
                  <a href={Likes}>View all your liked dogs</a>
                </Paper>
              </React.Fragment>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  } else {
      const style= {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }
    
    return (
      <div style={style}>
          <h1>You are not logged in!!</h1>
        <Button onClick={goLogin}>Login</Button>
      </div>);
  }
}
