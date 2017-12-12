# Assignment 2 - Automated development process.

Name: Markus Kral
Student No.:  20078461

## Overview.

The app represents a digital cookbook.
All non-modifying actions are open for everyone, e.g viewing all receipes, viewing one receipe, search receipe, ...
Modifying actins like updating and deleting a receipe are only available for signed up and logged in users.

All these functions are tested on each push by travis (backend & frontend), coverage data is send to coveralls.io.
The project can be pushed to heroku via its cli.


## Environment.

The server is written in nodejs.
It uses mongodb with enabled authentication (mongodb://cookbook:12345678@localhost:27017/cookbookTest) for persistance.
To push to heroku one needs the heroku-cli installed.


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


## Acceptance Testing.

### Home

![home-page](screenshots/home-page.png "Home")
![home-page](screenshots/home-page_with_menue.png "Home")

![home-page](screenshots/home-test.png "Home")

    webapp2/test/acceptance/homePage.js

### About

![home-page](screenshots/about.png "About")

![home-page](screenshots/about-test.png "Home")

    webapp2/test/acceptance/about.js

### Contact

![home-page](screenshots/contact.png "Contact")

![home-page](screenshots/contact-test.png "Home")

    webapp2/test/acceptance/contact.js

### List All receipes

![home-page](screenshots/listAll.png "List all receipes")

![home-page](screenshots/listAll-test.png "Home")

    webapp2/test/acceptance/listAll.js

### List latest receipes

![home-page](screenshots/latest.png "List latest receipe")

![home-page](screenshots/latest-test.png "Home")

    webapp2/test/acceptance/latest.js

### Search for receipe

![home-page](screenshots/search.png "Search for receipe")

![home-page](screenshots/search-test.png "Home")

    webapp2/test/acceptance/search.js

### Create a receipe

![home-page](screenshots/create.png "Create a receipe")

![home-page](screenshots/create-test.png "Home")

    webapp2/test/acceptance/create.js

### Login

![home-page](screenshots/login.png "Login")

![home-page](screenshots/login-test.png "Home")

    webapp2/test/acceptance/login.js

### About

![home-page](screenshots/signup.png "Sign up")

![home-page](screenshots/signup-test.png "Home")

    webapp2/test/acceptance/signup.js



## Continuous Integration.

    https://travis-ci.org/MarkusKral/WITcookbook


## Automated Deployment.

As there have been some problems with my tests not exiting on travis, there is no automated deploymen.t
This issue has been discussed with the lecturer.
Tests do finish when simply called with mocha test/*.js but dont with the exact same command as an npm test script.

Deployment to heroku is therefore done with the heroku-cli.
