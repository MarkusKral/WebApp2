# Assignment 2 - Automated development process.

Name: Markus Kral
Student No.:  20078461

## Overview.

The app represents a digital cookbook.
All non-modifying actions are open for everyone, e.g viewing all receipes, viewing one receipe, search receipe, ...
Modifying actins like updating and deleting a receipe are only available for signed up and logged in users.

...... A brief explanation of what this repo demonstrates in relation to agile software process automation . . . . the nature of the app used  as the context for demonstrating the automation tools . . . .  

## Environment.

The server is written in nodejs.
It uses mongodb with enabled authentication (mongodb://cookbook:87654321@localhost:27017/cookbook) for persistance.

. . . . . List any tools and technologies required before cloning the repo. e.g. Node V x.x, MongoDB, etc . . . . .  

## Build automation.

    Clone the repo and instal all npm-packages:
    $ cd /tmp/
    $ git clone https://github.com/MarkusKral/WITcookbook.git
    $ cd WITcookbook
    $ npm install
    $ cd webapp2
    $ npm install
    Build the app:
    $ npm run build
    Run the tests (from wit-folder):
    $ cd ..
    $ npm run coverage
    Run the Server:
    $ node webapp2/server.js

List precisely the sequence of steps (i.e. terminal commands) required to build, test (Acceptance test) and run the complete app locally - what NPM scripts (and other scripts) to execute.  

## Acceptance Testing.

### Home

![home-page](screenshots/home.png "Home")

    webapp2/test/acceptance/homePage.js

![home-page](screenshots/home-test.png "Home")

### About

![home-page](screenshots/about.png "About")

    webapp2/test/acceptance/about.js

![home-page](screenshots/about-test.png "Home")

### Contact

![home-page](screenshots/contact.png "Contact")

    webapp2/test/acceptance/contact.js

![home-page](screenshots/contact-test.png "Home")

### List All receipes

![home-page](screenshots/listAll.png "List all receipes")

    webapp2/test/acceptance/listAll.js

![home-page](screenshots/listAll-test.png "Home")

### List latest receipes

![home-page](screenshots/latest.png "List latest receipe")

    webapp2/test/acceptance/latest.js

![home-page](screenshots/latest-test.png "Home")

### Search for receipe

![home-page](screenshots/search.png "Search for receipe")

    webapp2/test/acceptance/search.js

![home-page](screenshots/search-test.png "Home")

### Create a receipe

![home-page](screenshots/create.png "Create a receipe")

    webapp2/test/acceptance/create.js

![home-page](screenshots/create-test.png "Home")

### Login

![home-page](screenshots/login.png "Login")

    webapp2/test/acceptance/login.js

![home-page](screenshots/login-test.png "Home")

### About

![home-page](screenshots/about.png "Sign up")

    webapp2/test/acceptance/signup.js

![home-page](screenshots/signup-test.png "Home")


. . . For each view of the app that has an associated acceptance test, show: (1) a screenshot of the web page (2) specify the pathname of the test file and (3) list the output from the test execution.

## Continuous Integration.

    https://travis-ci.org/MarkusKral/WITcookbook

Specify the URL of the Travis page for this app (e.g. https://travis-ci.org/joebloggs/donationsApp_with_travis) Explain any special steps a third party must perform to successfully execute CI on your project after cloning it. 

## Automated Deployment.

As there have been some problems with my tests not exiting on travis, there is no automated deploymen.t
This issue has been discussed with the lecturer.
Test do finish when simply called with mocha test/*.js but dont with the exact same command as an npm test script.

.... Specify the URL of the deployed app. Explain the steps a third party must perform to enable auto-deployment by Travis of your app . . .  

## Extra features.

. . . . Briefly state any extra aspects of your automation process that you feel should be high-lighted . . . . .

