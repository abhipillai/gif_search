## SoFi Gif Search

An application used to search for gifs online and share with your colleagues. This app allows you to search Giphy with keywords.
Note that the trending gifs will be provided if there is no search string.
The user can choose to drag and drop their favorite gif in the drop zone. They also have the option to clear the dropzone or remove gifs that they want.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`

To Run Lint:

`npm lint`

Before running the app, make sure that you get the giphy api key from a colleague and add it to your .env file. A .env.sample template has been provided to you in this repository. Make sure you create your .env file using the same template.

## Changes and submitting a PR

  - Make sure you run `npm lint` and fix all the issues before commiting a PR
  - Add necessary unit tests for every new functionality created
  - Update all failing tests before merging it in
