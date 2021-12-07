import React from "react";
import { useQuery } from "@apollo/client";
// import from components
import LikedCards from "../components/LikedCards/index";
// import from material
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import from utils
import { QUERY_SINGLE_USER } from "../utils/queries";
import Auth from "../utils/auth";
import './Likes.css'

export default function Likes() {
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { id: Auth.getProfileToken().data._id },
  });
  const likedDogs = data?.user.pets || [];

  const goLogin = (event) => {
    window.location.assign("/");
  };

  
  if (Auth.isLoggedIn()) {
    
    if (loading) {
      return <div>...loading</div>;
    }

    if (!likedDogs.length) {
      return <h3>No liked dogs yet!</h3>;
    }

    console.log(likedDogs);

    return (
      <Box>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <h2 className='likesHeader'>Your Liked Dogs</h2>
          </Grid>
          <Grid item>
            <LikedCards likedDogs={likedDogs} />
          </Grid>
        </Grid>
      </Box>
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
