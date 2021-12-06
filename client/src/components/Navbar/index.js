import React from "react";
import { Link } from "react-router-dom";
// imports from material
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import './navbar.css'

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        className='navbarContainer'
        elevation={3}
      >
        <BottomNavigation
          showlabels="true"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to="/profile">
            <BottomNavigationAction
              label="Profile"
              icon={<img src="./images/profileblank2.png" />}
            />
          </Link>
          <Link to="/cards">
            <BottomNavigationAction
              label="Sheltr"
              icon={<img src="./images/pawblank2.png" />}
            />
          </Link>
          <Link to="/likes">
            <BottomNavigationAction
              label="Likes"
              icon={<img src="./images/heartblank2.png" />}
            />
          </Link>
          <Link to="/settings">
            <BottomNavigationAction
              label="Settings"
              icon={<img src="./images/settingsblank2.png" />}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

// export default function Navbar() {
//     // if (Auth.loggedIn()) {

//     return(

//     <nav className='navContainer' display="flex-shrink" role="navigation">
//         <ul style = {{display: "inline-flex","listStyleType": "none", borderTop: "3px solid black"}}>
//             <li style = {{padding: "20px"}}>
//                 <Link to='/profile'>
//                     <img src='./images/profileblank.png' alt='profile'></img>
//                     Profile
//                 </Link>
//             </li>
//             <li style = {{borderLeft: "3px solid", padding: "20px"}}>
//                 <Link to='/sheltr'>
//                     <img src='./images/pawblank.png' alt='sheltr'></img>
//                     Sheltr
//                 </Link>
//             </li>
//             <li style = {{borderLeft: "3px solid", padding: "20px"}}>
//                 <Link to='/likes'>
//                     <img src='./images/heartblank.png' alt='heart'></img>
//                     Likes
//                 </Link>
//             </li>
//             <li style = {{borderLeft: "3px solid", padding: "20px"}}>
//                 <Link to='/settings'>
//                     <img src='./images/settingsblank.png' alt='settings'></img>
//                     Settings
//                 </Link>
//             </li>
//         </ul>
//     </nav>
//     )

//     // } else {
//     //     return (<Login />)
//     // }
// }

// position: 'fixed', bottom: 0, left: 0, right: 0
