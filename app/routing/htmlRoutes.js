// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
// Homework Requirement: 
// Your `htmlRoutes.js` file should include two routes:
//
//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.

// Export API routes
module.exports = function(app) {

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    
    app.get(function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    
};  // module.exports = function(app)
