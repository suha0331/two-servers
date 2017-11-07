// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORT = 7000;
const PORT2 = 7500;

function handleRequest(request, response) {
    response.end("You are nice " + request.url);
}

var server = http.createServer(handleRequest);
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});


function handleRequest(request, response) {
    response.end("You are weird " + request.url);
}

var server = http.createServer(handleRequest);
server.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2);
});