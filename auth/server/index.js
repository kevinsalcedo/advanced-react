// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Create an instance of express
const app = express();

// App Setup
// Getting express working how we want

// Server setup
// Getting our express app to talk to the outside world
const port = process.env.PORT || 3090;

// createServer - native node library
// Create an http server that knows how to receive requests
// Forward these requests to our express app
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
