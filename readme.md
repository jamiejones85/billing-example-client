# Billing Example Client

This is the client application for that calls out to the billing example proxy. I've written it in AngularJS and
intended to be kept very simple. I've also used jasmine for the first time.

## Prerequisites

    *[npm](https://docs.npmjs.com/)
    *[grunt-cli](http://gruntjs.com/getting-started) installed globally: npm install -g grunt-cli


## Get the dependencies

    npm install

## Run the application

    grunt build

Navigate to http://localhost:8282/ in your browser


## Run the tests

    cd tests
    ./node_modules/.bin/karma start tests/karma.conf.js

## To run the end2end tests.

    *Ensure the proxy is running, see [Readme](https://github.com/jamiejones85/billing-example-proxy/blob/master/Readme.md)
    *Start the web driver ./node_modules/protractor/bin/webdriver-manager start in one terminal
        *Will need to run  ./node_modules/protractor/bin/webdriver-manager update --standalone the before the first run
    *Start the application server grunt http-server in another terminal
    *Run protractor tests with ./node_modules/protractor/bin/protractor e2e/conf.js in a 3rd terminal

## TODO

    *Make use of [npm scripts](https://docs.npmjs.com/misc/scripts) to run the tests
    *Jasmine tests to coffee with [preprocessors](http://karma-runner.github.io/0.8/config/preprocessors.html)
    *Add to Travis CI and add build badge
