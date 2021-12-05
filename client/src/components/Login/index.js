import React from "react";

export default function LoginComp() {
    const [loginState, setLoginState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);

    // update state based on form input changes
    const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
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
      email: '',
      password: '',
    });
  };


    return(
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
        <button
          className=""
          type="submit"
        >
          Login
        </button>
        {/* <button
          className=""
          type="submit"
        >
          SignUp
        </button> */}
        
      </form>);
}