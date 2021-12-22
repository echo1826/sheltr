import React, { useState, useEffect, useRef } from "react";
// imports from material
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
// imports from utils
import Auth from '../utils/auth';
import './Settings.css'
import {UPDATE_SETTINGS, REMOVE_USER} from '../utils/mutations';
import {QUERY_SETTINGS} from '../utils/queries';
import {useQuery, useMutation} from '@apollo/client';

export default function Settings() {
  const {loading, data} =
    useQuery(QUERY_SETTINGS, {
    variables: {userId: Auth.getProfileToken().data._id}
  });

  const [updateSettings] = useMutation(UPDATE_SETTINGS);
  const [removeUser] = useMutation(REMOVE_USER);
  // initializing the state lets us update it for some reason
  const [animals, setAnimals] = useState(null);
  const [age, setAge] = useState(null);
  const [size, setSize] = useState(null);
  const [trained, setTrained] = useState(null);
  const [animalsFlag, setAnimalsFlag] = useState(null);
  const [ageFlag, setAgeFlag] = useState(false);
  const [sizeFlag, setSizeFlag] = useState(false);
  const [trainedFlag, setTrainedFlag] = useState(false);
  const isMounted = useRef(false);
  
  let prevAnimals;
  let prevAge;
  let prevSize;
  let prevTrained;
  if(!loading && data?.settings) {
      prevAnimals = data?.settings.animals;
      prevAge = data?.settings.age;
      prevSize = data?.settings.size;
      prevTrained = data?.settings.house_trained;
  }

  // handle functions set the states, this hook will make the DB update
  useEffect(()=> {
    if (isMounted.current){
    handleSettingsChange();
    } else {
      isMounted.current = true
    }
  },[animals,age,size,trained]);

  const goLogin = (event) => {
    window.location.assign("/");
  };
  const handleAnimals = (event) => {
    setAnimalsFlag(true);
    setAnimals(event.target.value);
    prevAnimals = animals;
  };
  const handleAge = (event) => {
    setAgeFlag(true);
    setAge(event.target.value);
    prevAge = age;
  };
  const handleSize = (event) => {
    setSizeFlag(true);
    setSize(event.target.value);
    prevSize = size;
  };
  const handleTrained = () => {
    setTrainedFlag(true);
    if(trained) {
      setTrained(null);
      prevTrained = trained;
    }else {
      setTrained(true);
      prevTrained = trained;
    }
    
  };
  const handleLogout = () => {
    Auth.logout();
  };

  const handleDelete = async (e) => {
    await removeUser({
      variables: {
        _id: Auth.getProfileToken().data._id
      }
    });
    Auth.logout();
  }

  const handleSettingsChange = async() => {
    try{
      switch(true) {
        case (animalsFlag && ageFlag && sizeFlag && trainedFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals, age, size, house_trained: trained}
          });
          break;
        } 
        case (animalsFlag && sizeFlag && trainedFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals, age:prevAge, size, house_trained: trained}
          });
          break;
        } 
        case (animalsFlag && ageFlag && trainedFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals, age, size:prevSize, house_trained: trained}
          });
          break;
        } 
        case (animalsFlag && sizeFlag && ageFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals, age:prevAge ,size, house_trained: trained}
          });
          break;
        } 
        case (ageFlag && sizeFlag && trainedFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals:prevAnimals, age, size, house_trained: trained}
          });
          break;
        } 
        case (animalsFlag && ageFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals, age, size:prevSize, house_trained: trained}
          });
          break;
        }
        case (animalsFlag && trainedFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals, age:prevAge, size:prevSize, house_trained: trained}
          });
          break;
        }
        case (animalsFlag && sizeFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals, age:prevAge, size, house_trained: trained}
          });
          break;
        }
        case (ageFlag && trainedFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals:prevAnimals, age, size:prevSize, house_trained: trained}
          });
          break;
        }
        case (trainedFlag && sizeFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals:prevAnimals, age:prevAge, size, house_trained: trained}
          });
          break;
        }
        case(ageFlag && sizeFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals:prevAnimals, age, size, house_trained: prevTrained}
          });
          break;
        }
        case(animalsFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals, age:prevAge, size:prevSize, house_trained: prevTrained}
          });
          break;
        }
        case(ageFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals:prevAnimals, age, size:prevSize, house_trained: prevTrained}
          });
          break;
        }
        case(sizeFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals:prevAnimals, age:prevAge, size, house_trained: prevTrained}
          });
          break;
        }
        case(trainedFlag): {
          await updateSettings({
            variables: {userId:Auth.getProfileToken().data._id, animals:prevAnimals, age:prevAge, size: prevSize, house_trained: trained}
          });
          break;
        }
        default: {
          break;
        }
      }
    }catch(err) {
      console.log(err);
    }
  };

  if (Auth.isLoggedIn()) {
    return (

      <Box sx={{
        display: 'grid',
        gridAutoColumns: '1fr',
        gap: 3,
        alignItems: 'center',
        paddingBottom: 0,
      }}
    > {loading ? <div>Loading settings...</div> :
      <React.Fragment>
      <Paper className='settingsContainer' elevation = {6} >
          <h2 align="center">User Settings</h2>
          <FormControl fullWidth style={{marginBottom: '20px'}} className='settingsForm'>
          <InputLabel id="demo-simple-select-label">Animals</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            value={prevAnimals}
            label="animals"
            type="animals"
            className='settingsInput'
            onChange={handleAnimals}
          >
            <MenuItem value={null}>No Preference</MenuItem>
            <MenuItem value={'Dogs'}>Dogs</MenuItem>
            <MenuItem value={'Cats'}>Cats</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{marginBottom: '20px'}} className='settingsForm'>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            value={prevAge}
            label="Age"
            type="age"
            className='settingsInput'
            onChange={handleAge}
          >
            <MenuItem value={null}>No Preference</MenuItem>
            <MenuItem value={'Baby'}>Baby</MenuItem>
            <MenuItem value={'Young'}>Young</MenuItem>
            <MenuItem value={'Adult'}>Adult</MenuItem>
            <MenuItem value={'Senior'}>Senior</MenuItem>
          </Select>
        </FormControl>
    
        <FormControl fullWidth style={{marginTop: '20px', marginBottom:'10px'}} className='settingsForm'>
          <InputLabel id="size-select">Size</InputLabel>
          <Select
            labelId="size-select"
            id="demo-simple-select"
            value={prevSize}
            label="Size"
            className='settingsInput'
            onChange={handleSize}
          >
            <MenuItem value={null}>No Preference</MenuItem>
            <MenuItem value={'Small'}>Small</MenuItem>
            <MenuItem value={'Medium'}>Medium</MenuItem>
            <MenuItem value={'Large'}>Large</MenuItem>
            <MenuItem value={'Extra Large'}>Extra Large</MenuItem>
          </Select>
        </FormControl>
        <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value={prevTrained}
          control={<Switch color="primary" checked={prevTrained}/>}
          label="House-trained"
          labelPlacement="start"
          className='settingsInput'
          onChange={handleTrained}
        />
        </FormGroup>
      </FormControl>
        </Paper>
        
        <Button variant ='outlined' color='error'onClick={handleLogout} className='settingsLogout'>Logout</Button>
        <Button variant ='outlined' color='error'onClick={handleDelete} className='settingsLogout'>Delete Account</Button>
        
        <footer className='settingsFooter'>
          <p>	Copyright &copy; 2021</p>
          <p className='settingsLinks'>Developed by:  
            <a href='https://github.com/echo1826' target='_blank'> Ethan Cho, </a>
            <a href='https://github.com/suelee0308' target='_blank'>Sue Lee, </a>
            <a href='https://github.com/mat-lundin' target='_blank'>Mat Lundin, </a>
            <a href='https://github.com/chuck2076' target='_blank'>Chuck Stephens, </a>
            <a href='https://github.com/PAW6063' target='_blank'>Phillip Welch</a>
          </p>
        </footer>
        </React.Fragment> 
      }
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
