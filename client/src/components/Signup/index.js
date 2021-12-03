import React from "react";
import ReactDOM from 'react-dom';

export default function Signup() {


    return (<div>
        <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="email" aria-describedby="my-helper-text" />
            <FormHelperText id="email helper">We'll never share your email.</FormHelperText>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="username" aria-describedby="my-helper-text" />
            <FormHelperText id="username helper">Username helper text</FormHelperText>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="password" aria-describedby="my-helper-text" />
            <FormHelperText id="password helper">Passwords must be at least 7 characters, alphanumeric only.</FormHelperText>
        </FormControl>
    </div>);
}