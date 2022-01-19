import React from "react";
import { useQuery, useMutation } from "@apollo/client";
// import from components
import LikedCards from "../components/LikedCards/index";
// import from material
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import from utils
import { QUERY_ME } from "../utils/queries";
import { REMOVE_USER_PETS } from "../utils/mutations";
import Auth from "../utils/auth";
import './Likes.css'

export default function Likes() {
  const me = useQuery(QUERY_ME);
  const [removeUserPets] = useMutation(REMOVE_USER_PETS);
  const likedanimals = me.data?.me.pets || [];

  const goLogin = (event) => {
    window.location.assign("/");
  };
  
  if (Auth.isLoggedIn()) {
    
    if (me.loading) {
      return <div>...loading</div>;
    }

    if (!likedanimals.length) {
      return <h3>No liked animals yet!</h3>;
    }

    return (
      <Box>
        <h2 className='likesHeader'>Your Liked animals</h2>
        
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            {likedanimals.map((animal) => <LikedCards animal={animal} removeUserPets={removeUserPets}/>)}
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
