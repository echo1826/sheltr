import * as React from 'react';
// imports from material
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Header.css';



export default function ButtonAppBar() {
  return (
    <Box sx={{ }}>
      <AppBar sx = {{ position:"static", backgroundColor:"transparent"}} >
        <Toolbar className='sheltrHeader'>
        <img src="./images/sheltr_logo.png" alt="Sheltr" style={{ width: 150, padding: 10, display: 'block' }} />
          <Typography variant="h1" component="div" color="black" fontFamily="Pacifico" margin="10px" align="center" sx={{ fontSize: "2.5rem", display: 'inline-block', paddingLeft: 0}}>
            <a href='/cards' style={{ textDecoration:'none', color:'#000' }}>Sheltr</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}