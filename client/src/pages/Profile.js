import React from "react";
import { useQuery } from "@apollo/client";
//imports from material
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button'
//imports from utils
import Auth from "../utils/auth";
import { QUERY_SINGLE_USER } from "../utils/queries";
import { Link } from "react-router-dom";

export default function Profile() {
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { id: Auth.getProfileToken().data._id },
  });

  console.log('user = ',data?.user);
  // console.log('user = ',data.user);

  const likedDogs = data?.user.pets || [];

  let profileDogs;
  if (!loading) {
    console.log(data?.user.pets);
    profileDogs = likedDogs.slice(0, 3);
  }

  const goLogin = () => {
    window.location.assign("/");
  };

  if (Auth.isLoggedIn()) {
    return (
      <div>
        <h1>{data?.user.username}</h1>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container>
              <React.Fragment>
                <Grid item>
                  <Paper>
                    <Avatar alt="Avatar" src="./images/profilefilled.png" />
                  </Paper>
                </Grid>
                <Grid item>
                  {/* <Paper>
                    <ul>
                      <li>Username: ABC</li>
                      <li>Username: ABC</li>
                      <li>Username: ABC</li>
                      <li>Username: ABC</li>
                    </ul>
                  </Paper> */}
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
                          <img src={dog.photo[0].small} alt={dog.name} />
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
                  <Link to="/likes"><Button>View all your liked dogs</Button></Link>
                </Paper>
              </React.Fragment>
            </Grid>
          </Grid>
        </Box>
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
