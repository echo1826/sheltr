import React from "react";
import { useQuery } from "@apollo/client";
//imports from material
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button'
//imports from utils
import Auth from "../utils/auth";
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";
import { Link } from "react-router-dom";
import './Profile.css'


export default function Profile() {
  
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { id: Auth.getProfileToken().data._id },
  });
  const me = useQuery(QUERY_ME);
  if(!me.loading) {
  }

  const date = Date(data?.user.createdAt)
  const joinedDate = new Date(date)
  const month = joinedDate.toLocaleString('default', { month: 'long' });
  const year = joinedDate.toLocaleString('default', {year: 'numeric'});


  const likedAnimals = me.data?.me.pets || [];

  let profileAnimals;
  if (!loading) {
    profileAnimals = likedAnimals.slice(0, 3);
  }

  const goLogin = () => {
    window.location.assign("/");
  };

  if (Auth.isLoggedIn()) {
    return (
    
      <div className= "userProfile">
        <h1>{me.data?.me.username}</h1>
        <div className="avatar">
        <Avatar alt="Avatar" src="https://avatarfiles.alphacoders.com/170/thumb-1920-170799.jpg" sx={{ width: 156, height: 156 }} />
        <ul>
          <li>Location: {data?.user.location || 'N/A'}</li>
          <li>Member Since: {month} {year}</li>
        </ul>
      </div>
        <div className="profileDogs">

            {loading ? (
              <React.Fragment></React.Fragment>
            ) : (
              profileAnimals.map((animal) => {
                return (
                  <div key={animal._id} className = "dogCard">
                          <img className="dogImage" src={animal.photo[0].small} alt={animal.name} />
                          <h2>{animal.name}</h2>
                          <p>{animal.breed.primary}</p>
                          <p>
                            {animal.size} | {animal.gender} | {animal.age}
                          </p>
                          </div>
                );
              })
            )}
        </div>
        <div> 
          <Link to="/likes" underline="none" className='profileLink'><Button className='profileBtn' style={{backgroundColor: '#F2F2F2', color: '#000'}} variant = "contained">View all your liked pets</Button></Link>
        </div>
      </div>);
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
        <Button className='profileBtn' onClick={goLogin}>Login</Button>
      </div>
    );
  }
}
