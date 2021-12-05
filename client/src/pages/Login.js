import React from "react";
import ReactDOM from 'react-dom';
import Signup from '../components/Signup/index'

import Auth from "../utils/auth";
import Cards from './Cards.js';
import LoginComp from '../components/Login/index.js';

export default function Login(component) {
    if(Auth.isLoggedIn()) {
        return(<Cards/>)
    } 

    return(<div>
        <Signup />
    </div>);
}