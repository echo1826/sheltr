import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Cards  from './pages/Cards';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <Login component={<LoginComp />}/>
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
  );
}

export default App;
