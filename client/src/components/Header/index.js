import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="center"
            color="inherit"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            Sheltr
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}