import React from "react";
import { useQuery } from "@apollo/client";
import {QUERY_SINGLE_USER, QUERY_ME} from '../utils/queries'
import {Grid}  from '@mui/material';
import Likes from './Likes'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Auth from '../utils/auth';

export default function Profile() {
    console.log(Auth.getProfileToken().data._id)
    const {loading, data} = useQuery(QUERY_SINGLE_USER, {
        variables: {id: Auth.getProfileToken().data._id}
    });
    const likedDogs = data?.user.pets || [];

    let profileDogs;
    if(!loading) {
        console.log(data?.user.pets)
        profileDogs = likedDogs.slice(0,3);

    }


    return(<div>
        <h1>My Profile</h1>

        <Box sx={{ flexGrow: 1 }}>
        <Grid container
        container direction="row"
        justifyContent="center"
        alignItems="center"
        >
           
            <Grid container>
                <React.Fragment>
                    <Grid item>
                        <Paper>
                            <Avatar alt="User photo" src='./images/profilefilled.png' />
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

            {loading ? <React.Fragment></React.Fragment>
            :
            profileDogs.map((dog) => {
                return(
                <Grid key={dog._id} container>
                    <React.Fragment>
                        <Grid container item>
                            <Paper>
                                <img src={dog.photo[0].small} alt='photo of dog'/>
                                <h2>{dog.name}</h2>
                                <p>{dog.breed.primary}</p>
                                <p>{dog.size} | {dog.gender} | {dog.age}</p>
                            </Paper>
                        </Grid>
                    </React.Fragment>
                </Grid>
            )})
            }

            <Grid container>
            <React.Fragment>
                <Paper>
                    <a href={Likes}>View all your liked dogs</a>
                </Paper>
                </React.Fragment>
            </Grid>
        </Grid>
        </Box>
    </div>);
}