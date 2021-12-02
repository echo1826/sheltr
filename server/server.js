const express = require("express");
const logger = require("morgan");
const db = require('./config/connection');
const {ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schemas');
const { authMiddleware } = require("./utils/auth");
// const path = require('path');
// const routes = require('./controllers');



const PORT = process.env.PORT || 3000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({app});
app.use(logger("dev"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// app.use(express.static("public"));

// app.use(routes);

// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});