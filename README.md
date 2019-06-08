# FriendFinder
HW Assignment 11 - Node and Express Servers  

## Overview Description
Homework Assignment 11 - Friend Finder
SMU Programming Bootcamp Spring 2019

### Overview

The purpose of this assignment is to build a compatibility-based "FriendFinder" application -- kinda like a dating app for friends. The full-stack site takes in results from a user questionnaire/survey, then compares the user's answers with those from other users. The app then displays the user's name and picture alongside the name and picture of the user that is the best overall match.  The app uses Express to handle routing. 

A model for the app can be found here: [this demo version of the site](https://friend-finder-fsf.herokuapp.com/).  I made a few deviations from the sample model, but the functionality is the same.

My working app can be found on Heroku [here](https://friend-finder-express.herokuapp.com/)

### Node Packages Used
The following packages are needed (npm install 'pkg name') to run the app

   * [Express](https://www.npmjs.com/package/express)

   * [Body-parser](https://www.npmjs.com/package/body-parser)

   * [Path](https://www.npmjs.com/package/path)

## Instructions for Starting the App 

There are two ways to start/run the app

### Running the app on your computer from a Bash Window

* Using a Bash command line window, clone or download the repo to the desired directory on your computer

* Execute "npm install" in the cloned project directory to install the needed program packages

* Start the server software by executing the command "node server.js" (This assumes that you have node installed on your computer)

* Open an internet window and goto url "http://localhost:3000/"

### Running the app on your computer from Heroku

* The working app can be found on Heroku [here](https://friend-finder-express.herokuapp.com/)

## Instructions for Using the App

* Welcome to the Friend Finder App. Click on the "Survey" button to find your new best friend. 

* On the Survey Page, enter your name and a URL to your photograph in the appropriate fields.  Notice that the field outlines turn green once it has been filled. Use the radio buttons to answer each of the 10 questions on the questionnaire. Answer the questions on a scale of 1 to 5 where 1 indicates that you strongly disagree with, and 5 indicates you strongly agree with the question (or statement). (They are actually statements! But hey, I'm just doing what it says in the homework assignment instructions.) All fields must be filled and all questions answered before submitting the form.  An alert will indicate and incomplete form.

* Once the form has been submitted, the app will use a super secret and complex algorithm, based on your selected answers, to determine the best match for your new best friend.  A new (modal) window will pop up showing the two of you, side-by-side. Your information will then be stored in the "Friend Database" so others can potentially be matched to you.  Click on the "Close" to exit the window.

* Note that input user data is not persistent (ie, stored in a file or database).  The friend list data is initially loaded from the friend.js file in JSON format into an array of objects. The input user data is appended to this array and persists only as long as the server is running.

* From the Surey Page you have the option to:
- Return to the Pome Page by clicking the "Home" button at the bottom of the page
- See the entire list of friends in the database (in JSON format) by clicking the "More Friends" button
- Go to the Github repository for the app by clicking the "GitHub Repo" button.  (I'm not sure why you would need to do this, since you are already there if you're reading this file.  But it was in the model in the homework instructions.)

## Homework Requirements

1. The survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question. (I chose to use the questions provided in the model, however I completely changed the format of the questionnaire.)

2. The `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

3. The `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. The `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. Save the application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should follow the format below.

```
{
  name: "Ahmed",
  photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}
```

6. Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

7. Once the current user's most compatible friend is found, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match. (I chose to display both the new user and the matched friend side-by-side)

8. Host the app on Heroku and submit the link with a link the the project Github repository.

9. After completing the homework add the piece to your portfolio. 
