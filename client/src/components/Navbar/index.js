import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Login from "../Login"

export default function Navbar() {
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
}