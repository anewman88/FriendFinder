// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create an "express" server on node
var app = express();

// Define the port 
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	// Log (server-side) when our server has started
	console.log("App FriendFinder Server listening on: http://localhost:" + PORT);
});
