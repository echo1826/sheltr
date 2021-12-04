import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" >
        <Toolbar>

          <Typography variant="h1" component="div" color="black" fontFamily="Pacifico" sx={{ flexGrow: 1 }}>
            Sheltr
          </Typography>
          <img src="./images/sheltr_logo.png" alt="Sheltr" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}