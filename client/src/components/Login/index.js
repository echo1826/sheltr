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

export default function LoginComp({flipChange}) {
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
    <div className="front loginCard" >
      {data ? (
        <p>
          Success!
        </p>
    ) : (
      <FormGroup className='form-containerCustom'>
          <FormLabel align="center" fontFamily="Source San Pro" fontStyle="italic" className='labelFont'>
              Login to continue where you left off!
          </FormLabel>
          <div className='emailCustom'>
            <InputLabel htmlFor="my-input" className='labelFont'>
              Email
            </InputLabel>
            <Input 
                // inputRef={(element)=> element?.focus?.()}
                id="email" 
                aria-describedby="my-helper-text"
                name='email'
                type='email'
                value={loginState.email}
                onChange={handleChange}
                className='inputField'
                
            />
          </div>
          <div className='passwordCustom'>
            <InputLabel htmlFor="my-input" className='labelFont'>
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
                className='inputField'
            />
            <FormHelperText id="password helper" className='helperFont'>
              Forgot your password?
            </FormHelperText>
          </div>
          {error && (
        <div className="my-3 p-3 bg-danger text-white loginError">{error.message}</div>
      )}
          <Button 
            variant="contained" 
            type="submit"
            onClick={handleFormSubmit}
            style={{marginTop: '5vh', width: '35%', maxWidth: '175px', alignItems: 'center',}}
            className='labelFont'>
              Login
          </Button>
          
          <p align="center" className="labelFont">
          Don't have an account?{" "}
            <Button onClick={flipChange} className="labelFont">Sign Up</Button>
          </p>
      </FormGroup>
      )}
    </div>
  );
}
