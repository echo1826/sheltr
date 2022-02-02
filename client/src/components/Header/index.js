import * as React from 'react';
// imports from material
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './Header.css';



export default function ButtonAppBar() {
  return (
    <Box sx={{ }}>
      <AppBar sx = {{ position:"static", backgroundColor:"transparent"}} >
        <Toolbar className='sheltrHeader'>
        <img src="./images/sheltr_logo2.png" alt="Sheltr" className='headerImg'/>
         <a href='/' className='headerText' style={{ textDecoration:'none', color:'#000' }}>Sheltr</a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}