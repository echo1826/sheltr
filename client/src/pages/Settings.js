import React from "react";
// imports from material
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// imports from utils
import Auth from '../utils/auth';



export default function Settings() {
  const [age, setAge] = React.useState("");
  const [size, setSize] = React.useState("");
  const [trained, setTrained] = React.useState(false);

  const goLogin = (event) => {
    window.location.assign("/");
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleSize = (event) => {
    setSize(event.target.value);
  };
  const handleTrained = (event) => {
    setTrained(event.target.value);
  };
  const handleLogout = () => {
    Auth.logout();
  };

  if (Auth.isLoggedIn()) {
    return (
      <Box sx={{
        display: 'grid',
        gridAutoColumns: '1fr',
        gap: 3,
        alignItems: 'center',
      }}
    >
      <Paper elevation = {6} >
          <h2 align="center">User Settings</h2>
        <FormControl fullWidth>
          <InputLabel id="age-select" margin="10%">Age</InputLabel>
          <Select
            labelId="age-select"
            id="demo-simple-select"
            value={age}
            label="Age"
            type="age"
            onChange={handleAge}
          >
            <MenuItem value={'baby'}>Baby</MenuItem>
            <MenuItem value={'young'}>Young</MenuItem>
            <MenuItem value={'adult'}>Adult</MenuItem>
            <MenuItem value={'senior'}>Senior</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="size-select" margin="10%">Size</InputLabel>
          <Select
            labelId="size-select"
            id="demo-simple-select"
            value={size}
            label="Size"
            onChange={handleSize}
          >
            <MenuItem value={'small'}>Small</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'large'}>Large</MenuItem>
            <MenuItem value={'extraLarge'}>Extra Large</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="trained-select" margin="10%">House Trained</InputLabel>
          <Select
            labelId="trained-select"
            id="demo-simple-select"
            value={trained}
            label="House-trained"
            onChange={handleTrained}
          >
            <MenuItem value={'yes'}>Yes</MenuItem>
            <MenuItem value={'notAFactor'}>Not a Factor</MenuItem>
          </Select>
        </FormControl>
        <Button variant = "contained" justifyContent ="center"
        onClick={handleLogout}
        >Logout</Button>
        </Paper>
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
