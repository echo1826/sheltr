import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Settings() {

  const [age, setAge] = React.useState('');
  const [size, setSize] = React.useState('');
  const [trained, setTrained] = React.useState(false);


    const handleAge = (event) => {
    setAge(event.target.value);
    };
    const handleSize = (event) => {
    setSize(event.target.value);
    };
    const handleTrained = (event) => {
    setTrained(event.target.value);
    };


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="age-select">Age</InputLabel>
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
        <InputLabel id="size-select">Size</InputLabel>
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
        <InputLabel id="trained-select">House-trained</InputLabel>
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
    </Box>
  );
}