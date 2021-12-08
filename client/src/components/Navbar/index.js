import React from "react";
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
          sx={{alignItems:'center'}}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <a href="/profile">
            <BottomNavigationAction
              label="Profile"
              icon={<img src="./images/profileblank2.png" alt="profile" />}
            />
          </a>
          <a href="/sheltr">
            <BottomNavigationAction
              label="Sheltr"
              icon={<img src="./images/pawblank2.png" alt="sheltr"/>}
            />
          </a>
          <a href="/likes">
            <BottomNavigationAction
              label="Likes"
              icon={<img src="./images/heartblank2.png" alt="liked cards"/>}
            />
          </a>
          <a href="/settings">
            <BottomNavigationAction
              label="Settings"
              icon={<img src="./images/settingsblank2.png" alt="settings"/>}
            />
          </a>
        </BottomNavigation>
      </Paper>
      </div>)

    :

    (<div className='topNavContainer'>
    <nav role="navigation">
        <ul className='topNavUl'>
            <li className='topNavLi'>
                <a href='/profile' className='topNavLink'>
                    <img src='./images/profileblank.png' alt='profile'></img>
                    Profile
                </a>
            </li>
            <li className='topNavLi'>
                <a href='/sheltr' className='topNavLink'>
                    <img src='./images/pawblank.png' alt='sheltr'></img>
                    Sheltr
                </a>
            </li>
            <li className='topNavLi'>
                <a href='/likes' className='topNavLink'>
                    <img src='./images/heartblank.png' alt='heart'></img>
                    Likes
                </a>
            </li>
            <li className='topNavLi'>
                <a href='/settings' className='topNavLink'>
                    <img src='./images/settingsblank.png' alt='settings'></img>
                    Settings
                </a>
            </li>
        </ul>
    </nav>
    </div>
    )
    }
    </Box>
  );
}

