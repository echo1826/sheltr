const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const routes = require('./controllers');



const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sheltr", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});