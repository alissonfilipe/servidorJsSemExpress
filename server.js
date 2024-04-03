/*
I want to make a basic server without express, This code creates a server using just http --->
const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('mudando')
});

server.listen(port, hostname, () => {
    console.log("servidor rodando!");
})

the return in the html of the adress is the word mudando
*/

// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Import the 'path' module for working with file paths
const path = require('path');

// Create a new router instance using Express
const router = express.Router();

// Define a route for the homepage ('/')
router.get('/', function(req, res) {
    // Send the 'index.html' file as the response
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a route for the 'sobre' page ('/sobre')
router.get('/sobre', function(req, res) {
    // Send the 'sobre.html' file as the response
    res.sendFile(path.join(__dirname, 'sobre.html'));
});

// Use the router for all routes starting from the root ('/')
app.use('/', router);

// Start the server and make it listen for incoming requests
app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor funcionando!"); // Log a message indicating the server is running
});