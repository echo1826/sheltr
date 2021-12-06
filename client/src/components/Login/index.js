import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// imports from utils
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth.js";
// import from material
import { FormGroup } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
// imported custom css
import './Login.css';

export default function LoginComp() {
  const [loginState, setLoginState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  // update state based on login input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  // submit login
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...loginState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setLoginState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="front" >
      {data ? (
        <p>
          Success!
        </p>
    ) : (
      <FormGroup className='form-containerCustom'>
          <FormLabel align="center" fontFamily="Source San Pro" fontStyle="italic">
              Login to continue where you left off!
          </FormLabel>
          <div className='emailCustom'>
            <InputLabel htmlFor="my-input">
              Email
            </InputLabel>
            <Input 
                id="email" 
                aria-describedby="my-helper-text"
                name='email'
                type='email'
                value={loginState.email}
                onChange={handleChange}
            />
          </div>
          <div className='passwordCustom'>
            <InputLabel htmlFor="my-input">
              Password
            </InputLabel>
            <Input 
                id="password" 
                required={true} 
                aria-describedby="my-helper-text" 
                name='password'
                type='password'
                onChange={handleChange}
                value={loginState.password}
            />
            <FormHelperText id="password helper">
              Forgot your password?
            </FormHelperText>
          </div>
          <Button 
            variant="contained" 
            type="submit"
            onClick={handleFormSubmit}
            style={{marginTop: '5vh', width: '25%', alignItems: 'center'}}>
              Login
          </Button>
      </FormGroup>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
}
