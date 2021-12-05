import React from "react";
import ReactDOM from 'react-dom';
import { FormControl } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'

export default function Signup() {


    return (<div>
        <FormControl>
            <FormLabel>Sign Up!</FormLabel>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="email" required="true" aria-describedby="my-helper-text" />
            <FormHelperText id="email helper">We'll never share your email.</FormHelperText>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="username" required="true" aria-describedby="my-helper-text" />
            <FormHelperText id="username helper">Username helper text</FormHelperText>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="password" required="true" aria-describedby="my-helper-text" />
            <FormHelperText id="password helper">Passwords must be at least 7 characters, alphanumeric only.</FormHelperText>
            <Button type="submit" variant="contained" color="success">
                Sign Up
            </Button>
        </FormControl>
    </div>);
}