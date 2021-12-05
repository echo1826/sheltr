import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default function ButtonAppBar() {
  return (
    <Box sx={{ }}>
      <AppBar sx = {{ position:"static", backgroundColor:"transparent", alignItems:"center", justifyContent:"center"}} >
        <Toolbar sx={{ alignItems: "center", display: "flex", flexDirection: "row", flexWrap: "wrap", width:"100%"}}>
          <Typography variant="h1" component="div" color="black" fontFamily="Pacifico" margin="10px" align="center">
            Sheltr
          </Typography>
          <img src="./images/sheltr_logo.png" alt="Sheltr" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}