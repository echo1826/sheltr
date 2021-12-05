import React from "react";
import Auth from "../../utils/auth";
import Login from '../../pages/Login';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';



// export default function Navbar() {
//     const [value, setValue] = React.useState(0);
//     const ref = React.useRef(null);
  
    // if (Auth.loggedIn()) {

//   return (
    
//     <Box sx={{ pb: 7 }} ref={ref}>
//       <CssBaseline />
      
//       <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
//         <BottomNavigation
//           showLabels
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         >
//             <Link to='/profile'>
//               <BottomNavigationAction label="Profile" icon='./images/profileblank.png'/>
//             </Link>
//             <Link to='/sheltr'>
//                 <BottomNavigationAction label="Sheltr" icon='./images/pawblank.png' />
//             </Link>
//             <Link to='/likes'>
//                 <BottomNavigationAction label="Likes" icon='./images/heartblank.png' />
//             </Link> 
//             <Link to='/settings'>
//                 <BottomNavigationAction label="Settings" icon='./images/settingblank.png' />
//             </Link>  
//         </BottomNavigation>
//       </Paper>
//     </Box>
//     )
    // } else {
    //     return (<Login />)
    // }
// }




export default function Navbar() {
    if (Auth.isLoggedIn()) {

    return(
    <nav className='navContainer'>
        <ul>
            <li>
                <Link to='/profile'>
                    <img src='./images/profileblank.png' alt='profile'></img>
                    Profile
                </Link>
            </li>
            <li>
                <Link to='/sheltr'>
                    <img src='./images/pawblank.png' alt='sheltr'></img>
                    Sheltr
                </Link>
            </li>
            <li>
                <Link to='/likes'>
                    <img src='./images/heartblank.png' alt='heart'></img>
                    Likes
                </Link>
            </li>
            <li>
                <Link to='/settings'>
                    <img src='./images/settingsblank.png' alt='settings'></img>
                    Settings
                </Link>
            </li>
        </ul>
    </nav>
    )

    } else {
        return (<Login />)
    }
}

// position: 'fixed', bottom: 0, left: 0, right: 0

