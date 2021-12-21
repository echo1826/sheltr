import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import { useMutation } from '@apollo/client';
// import from material
import { FormGroup } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
// import from utils
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function Signup({flipChange}) {

//create a state to keep track of form values

    const [formState, setFormState] = useState({ 
        username: '', 
        email: '', 
        password: '',
        location: '' });

    const [addUser] = useMutation(ADD_USER);

    // attempt to create the user token
    const clickHandler = async (event)=>{

        event.preventDefault();
        try {
            const { data } = await addUser({
              variables: { ...formState },
            });
      
            Auth.login(data.addUser.token);
          } catch (e) {
            console.error(e);
          }
        };

    // set the state to reflect whatever is in the input fields
    const changeHandler = (event)=> {
        const { name, value } = event.target;
    
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
    <div className="back signupCard">
        <FormGroup className='form-containerCustom'>
            <FormLabel align="center" fontFamily="Source San Pro" fontStyle="italic" className='labelFont'>
                Sign up to create a profile and start searching!
            </FormLabel>
            <div className='emailCustom'>
                <InputLabel htmlFor="my-input" className='labelFont'>
                    Email
                </InputLabel>
                <Input 
                    id="signUpEmail"
                    aria-describedby="my-helper-text"
                    name='email'
                    type='email'
                    value={formState.email}
                    onChange={changeHandler}
                    className='inputField'
                />
                <FormHelperText id="emailHelper" className='helperFont'>
                    We'll never share your email.
                </FormHelperText>
            </div>
            <div className='usernameCustom'>
                <InputLabel htmlFor="my-input" className='labelFont'>
                    Username
                </InputLabel>
                <Input 
                    id="username" 
                    required={true} 
                    aria-describedby="my-helper-text"
                    name='username'
                    type='text'
                    onChange={changeHandler}
                    value={formState.username}
                    className='inputField'
                />
                <FormHelperText id="username helper" className='helperFont'>
                    Make your username something unique!
                </FormHelperText>
            </div>
            <div className='passwordCustom'>
                <InputLabel htmlFor="my-input" className='labelFont'>
                    Password
                </InputLabel>
                <Input 
                    id="signUpPassword" 
                    required={true} 
                    aria-describedby="my-helper-text" 
                    name='password'
                    type='password'
                    onChange={changeHandler}
                    value={formState.password}
                    className='inputField'
                />
                <FormHelperText id="password helper" className='helperFont'>
                    Passwords must be at least 7 characters, alphanumeric only.
                </FormHelperText>
            </div>
            <div className='locationCustom'>
                <InputLabel htmlFor="my-input" className='labelFont'>
                    Location
                </InputLabel>
                <Input 
                    id="location" 
                    required={true} 
                    aria-describedby="my-helper-text" 
                    name='location'
                    type='text'
                    onChange={changeHandler}
                    value={formState.location}
                    className='inputField'
                />
                <FormHelperText id="location helper" className='helperFont'>
                    Where would you like to find a pet?
                </FormHelperText>
            </div>
            <Button 
                variant="contained" 
                type="submit"
                onClick={clickHandler}
                style={{marginTop: '5vh', width: '35%', maxWidth: '175px', alignItems: 'center',}}>
                  Sign Up
            </Button>
            <p align="center" className="labelFont">
                Already have an account?{" "}
                <Button onClick={flipChange} className="labelFont">Log In</Button>
            </p>
        </FormGroup>
    </div>);
};