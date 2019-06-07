// Dependencies
// =============================================================
var path = require("path");
var debugON = true;

// Import the list of friend entries
// Using a js list of objects instead of a database 
var friendList = require("../data/friends.js");
if (debugON) console.log ("Loaded apiRoutes.js - friendList ", friendList );

// Routes
// =============================================================
// Homework Requirement: 
// Your `apiRoutes.js` file should contain two routes:
//
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of 
//      all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//      This route will also be used to handle the compatibility logic.

// Export API routes
module.exports = function(app) {
    
    // Return the friendsList in simple JSON format
    app.get("/api/friends", function(request, result) {
        if (debugON) console.log ("in get /api/friends", friendList);
        return result.json(friendList);
    });  // app.get("/api/friends"...
    
    // Create/post New Friend entry - takes in JSON input
    app.post("/api/friends", function(request, result) {
        if (debugON) console.log ("in post /api/friends", request.body);

        // request.body hosts is equal to the JSON post sent from the user
        // This works because of the body parsing middleware
        var newFriend = request.body;
        var newScores = request.body.scores;
        
        // Temp store new friend input 
        var newFriend = {
            name: request.body.name,
            photo: request.body.photo,
            scores: []
        };
        // Convert scores from string to integer data (AJAX post seemed to make the numbers strings)
        newFriend.scores = newScores.map(Number);
        if (debugON) console.log("New Friend ", newFriend);

        // Determine the best match
        

        //

        // Add the user input data to the friendList
        // wait to push the new user data before finding the best match otherwise
        // the best match will be the newly input friend.
        friendList.push(newFriend);
        if (debugON) console.log ("just pushed new friend ", newFriend);
        //  For now return the new friend data
        result.json(newFriend);

        //  Return the best match data
        //result.json(bestMatch);

        
    });  //  app.post("/api/friends"...
    
};  // module.exports = function(app) {

