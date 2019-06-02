// Dependencies
// =============================================================
var path = require('path');

// Import the list of friend entries
var friendList = require('../data/friends.js');

//  Your `apiRoutes.js` file should contain two routes:
//
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of 
//      all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//      This route will also be used to handle the compatibility logic.

// Export API routes
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friendList);
    });  // app.get("/api/friends"...
    
    // Create New Friend entry - takes in JSON input
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
    
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newFriend.routeName = newcharacter.name
            .replace(/\s+/g, '')
            .toLowerCase();
    
        console.log(newFriend);
    
        friendList.push(newFriend);
    
        res.json(newFriend);
    });  //  app.post("/api/friends"...
    
};  // module.exports = function(app) {

