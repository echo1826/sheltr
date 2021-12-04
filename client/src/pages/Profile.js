import React from "react";
import ReactDOM from 'react-dom';
import Likes from './Likes'
// import profileImg from '../../public/images/profilefilled.png'
import { useQuery } from "@apollo/client";
import {QUERY_ALL_DOGS} from '../utils/queries'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Grid}  from '@mui/material';
import Avatar from '@mui/material/Avatar';

export default function Profile() {
    const {loading, data} = useQuery(QUERY_ALL_DOGS)
    const likedDogs = data?.dogs || [];

    let profileDogs;
    if(!loading) {
        profileDogs = likedDogs.slice(0,3)
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