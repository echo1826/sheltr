import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
  createHttpLink, 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import from components
import Header from './components/Header';
import Navbar from './components/Navbar';
// import from pages
import Cards  from './pages/Cards';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Likes from './pages/Likes';
import NotLoggedIn from './pages/NotLoggedIn';
import Landing from './pages/Landing';
// import from utils
import Auth from "./utils/auth";
// import from material
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



const theme = createTheme (theme => ({
  palette: {
    type: 'light',
    primary: {
      main: '#fafafa',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Pacifico',
    },
    fontFamily: 'Oxygen',
    h2: {
      fontFamily: 'Source Sans Pro',
    },
  },
}));

function App() {

  return (

<ThemeProvider theme = {theme}>

    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/sheltr">
              {Auth.isLoggedIn() ? <Cards /> : <NotLoggedIn/>}
            </Route>
            <Route exact path="/profile">
              {Auth.isLoggedIn() ? <Profile /> : <NotLoggedIn/>}
            </Route>
            <Route exact path="/likes">
            {Auth.isLoggedIn() ? <Likes /> : <NotLoggedIn/>}
            </Route>
            <Route exact path="/settings">
            {Auth.isLoggedIn() ? <Settings /> : <NotLoggedIn/>}
            </Route>
          </div>
          <Navbar />
        </div>
      </Router>
    </ApolloProvider>

 </ThemeProvider>

  );
}

export default App;
