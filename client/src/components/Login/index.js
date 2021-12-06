import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// imports from utils
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth.js";

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
    console.log(loginState);
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
    <div className="card-body">
      {data ? (
        <p>
          Success!
        </p>
    ) : (
      <form onSubmit={handleFormSubmit}>
        <input
          className=""
          placeholder="Your email"
          name="email"
          type="email"
          value={loginState.email}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="******"
          name="password"
          type="password"
          value={loginState.password}
          onChange={handleChange}
        />
        <button className="" type="submit">
          Login
        </button>
      </form>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
}
