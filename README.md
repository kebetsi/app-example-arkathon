# app-arkathon-homepod
helper gists for homepod

## Prerequisites

Run `npm install` to fetch the dependencies

## Login

Simple login used to obtain an app token, with which you will be able to create the data structure ([Streams](http://api.pryv.com/getting-started/javascript/#manage-streams)) and data
points ([Events](http://api.pryv.com/getting-started/javascript/#manage-events)), as well as [Access](http://api.pryv.com/getting-started/javascript/#manage-accesses) tokens for care takers, family, insurers and other eHeahlth stakeholders.

run `npm run login` to compile `login.js` with its dependencies in `dist/login.js`

Open `www/login.html` to display a simple web page containing the login button


