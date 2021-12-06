import React, {useState, useEffect} from "react";
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

  const [dimensions, setDimensions] = React.useState({ 
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth
      })
  }
    window.addEventListener('resize', handleResize)
  }, [])


  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      {dimensions.width < 1200 ? 
      (
      <div>
      <CssBaseline />

      <Paper
        className='bottomNavbarContainer'
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
      </div>)

    :

    (<div className='topNavContainer'>
    <nav role="navigation">
        <ul className='topNavUl'>
            <li className='topNavLi'>
                <Link to='/profile' className='topNavLink'>
                    <img src='./images/profileblank.png' alt='profile'></img>
                    Profile
                </Link>
            </li>
            <li className='topNavLi'>
                <Link to='/sheltr' className='topNavLink'>
                    <img src='./images/pawblank.png' alt='sheltr'></img>
                    Sheltr
                </Link>
            </li>
            <li className='topNavLi'>
                <Link to='/likes' className='topNavLink'>
                    <img src='./images/heartblank.png' alt='heart'></img>
                    Likes
                </Link>
            </li>
            <li className='topNavLi'>
                <Link to='/settings' className='topNavLink'>
                    <img src='./images/settingsblank.png' alt='settings'></img>
                    Settings
                </Link>
            </li>
        </ul>
    </nav>
    </div>
    )
    }
    </Box>
  );
}



//     )

//     // } else {
//     //     return (<Login />)
//     // }
// }

// position: 'fixed', bottom: 0, left: 0, right: 0
