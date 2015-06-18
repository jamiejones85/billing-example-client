# Billing Example Client

This is the client application for that calls out to the billing example proxy. I've written it in AngularJS and
intended to be kept very simple. I've also used jasmine for the first time.

## Prerequisites

    *[npm](https://docs.npmjs.com/)
    *[grunt-cli](http://gruntjs.com/getting-started) installed globally: npm install -g grunt-cli
    *[karma-cli](http://karma-runner.github.io/0.12/intro/installation.html)


## Get the dependencies

    npm install

## Run the application

    grunt build

Navigate to http://localhost:8282/ in your browser


## Run the tests

    cd tests
    karma start
