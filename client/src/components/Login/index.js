import React from "react";
import ReactDOM from 'react-dom';

export default function LoginComp() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
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
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


    return(
        <form onSubmit={}>
        <input
          className=""
          placeholder="Your email"
          name="email"
          type="email"
          value={}
          onChange={}
        />
        <input
          className="form-input"
          placeholder="******"
          name="password"
          type="password"
          value={}
          onChange={}
        />
        <button
          className=""
          type="submit"
        >
          Login
        </button>
        <button
          className=""
          type="submit"
        >
          SignUp
        </button>
        
      </form>);
}