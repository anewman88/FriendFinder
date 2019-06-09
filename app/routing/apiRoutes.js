// Dependencies
// =============================================================
var path = require("path");
var debugON = false;

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
        var bestMatchValue = 41; // make larger than largest possible value
        var bestMatchIndex = 0;  // default index value
        
        // Temp store new friend input.  Easier to work with
        var newFriend = {
            name: request.body.name,
            photo: request.body.photo,
            scores: []
        };
        // Convert scores from string to integer data (post seemed to make the numbers strings)
        newFriend.scores = newScores.map(Number);
        if (debugON) console.log("New Friend ", newFriend);

        // Determine the best match
        // loop through the friendList
        for (var i = 0; i< friendList.length; i++) {
            // get the current friend in the list
            var currentFriend = {
                name: friendList[i].name,
                photo: friendList[i].photo,
                scores: friendList[i].scores
            };

            console.log (currentFriend.scores, newFriend.scores);
            // Compare each survey scores of the currentFriend with the scores of newFriend
            // calculate the absolute value between the scores and add it
            // to the curMatchValue;
            var curMatchValue = 0;
            currentFriend.scores.forEach(function calcMatchValue(score, index) {
                console.log ("difference is " + Math.abs (newFriend.scores[index] - score))
                curMatchValue += (Math.abs (newFriend.scores[index] - score));
            });

            // Check if current friend is the new best match
            if (debugON) console.log ("curMatchValue = " + curMatchValue);
            if (curMatchValue <= bestMatchValue) {
                bestMatchValue = curMatchValue;
                bestMatchIndex = i;
                if (debugON) console.log ("bestMatchValue = "+ bestMatchValue +" bestMatchIndex = " + bestMatchIndex);
            }  // if
        }  // for 

        // Add the user input data to the friendList
        // wait to push the new user data before finding the best match otherwise
        // the best match will be the newly input friend.
        friendList.push(newFriend);
        if (debugON) console.log ("just pushed new friend ", newFriend);
    
        if (debugON) console.log ("returning best match friend ", friendList[bestMatchIndex]);
        //  Return the best match data
        result.json(friendList[bestMatchIndex]);
        
    });  //  app.post("/api/friends"...
    
};  // module.exports = function(app) {

