// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORTONE = 7000;
const PORTTWO = 7500;

function handleRequestOne(request, response) {
    response.end("You are nice " + request.url);
}

function handleRequestTwo(request, response) {
    response.end("You are weird " + request.url);
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


serverOne.listen(PORTONE, function() {
    console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {
    console.log("Server listening on: http://localhost:" + PORTTWO);
});