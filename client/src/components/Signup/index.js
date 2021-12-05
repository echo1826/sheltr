import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import { FormGroup } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../../utils/mutations'
import Auth from '../../utils/auth'

export default function Signup() {

//create a state to keep track of form values

    const [formState, setFormState] = useState({ 
        username: '', 
        email: '', 
        password: '' });

    const [addUser, { error, data }] = useMutation(ADD_USER);

    // attempt to create the user token
    const clickHandler = async (event)=>{
        console.log('clickHandler being hit')
        event.preventDefault();
        try {
            const { data } = await addUser({
              variables: { ...formState },
            });
      
            Auth.login(data.addUser.token);
            window.location.assign('/profile');
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
        console.log(formState)
    };

    return (<div>
        <FormGroup>
            <FormLabel>Sign Up!</FormLabel>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="email" aria-describedby="my-helper-text"
                name='email'
                type='email'
                value={formState.email}
                onChange={changeHandler}
                 />
            <FormHelperText id="email helper">We'll never share your email.</FormHelperText>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="username" required={true} aria-describedby="my-helper-text"
                name='username'
                type='text'
                onChange={changeHandler}
                value={formState.username}/>
            <FormHelperText id="username helper">Username helper text</FormHelperText>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="password" required={true} aria-describedby="my-helper-text" 
                name='password'
                type='password'
                onChange={changeHandler}
                value={formState.password}/>
            <FormHelperText id="password helper">Passwords must be at least 7 characters, alphanumeric only.</FormHelperText>
            <Button type="submit" variant="contained" color="success"
             onClick={clickHandler}>
                Sign Up
            </Button>
        </FormGroup>
        <a>Already a user? Log in!</a>
        
    </div>);
};