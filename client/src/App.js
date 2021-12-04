import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { themeOptions } from '@material-ui/core/styles/createMuiTheme';
import Header from './components/Header';
import Cards  from './pages/Cards';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
// import { ThemeProvider } from '@emotion/react';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// export const ThemeProvider = themeOptions ( {
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#fafafa',
//     },
//   },
//   typography: {
//     h1: {
//       fontFamily: 'Pacifico',
//     },
//     fontFamily: 'Oxygen',
//     h2: {
//       fontFamily: 'Source Sans Pro',
//     },
//   },
// });

function App() {
  return (
    // <ThemeProvider>
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/cards">
              <Cards />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
          </div>
          <Navbar />
        </div>
      </Router>
    </ApolloProvider>
    // </ThemeProvider>
  );
}

export default App;
