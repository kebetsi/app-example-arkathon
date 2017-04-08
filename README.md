# app-arkathon-example
helper gists for Pryv users

## Prerequisites

Run `npm install` to fetch the dependencies

## Useful links

- [API docs](https://api.pryv.com)
- [Front-end libs](https://api.pryv.com/code-libraries/)
- [API concepts](https://api.pryv.com/concepts/)
- [Getting Started JavaScript](https://api.pryv.com/getting-started/javascript/)
- [API reference](https://api.pryv.com/reference)
- [Generate App Token](https://pryv.github.io/app-web-access/?pryv-reg=reg.pryv.me)
- [Dashboard signIn](https://sw.pryv.me/access/signinhub.html)
- [Simple raw app](https://kerma2.github.io/pryv-example-app/?pryv-domain=pryv.me)

## Pryv platform

![middleware](https://pryv.com/wp-content/uploads/2016/01/Screenshot-2016-04-03-21.27.33-1024x581.png)

## Patient account creation

We haven't made available the user creation on Pryv, you may do this manually on the following page:
[https://sw.pryv.me/access/register.html](https://sw.pryv.me/access/register.html)
  
After user creation, you may implement a login into the patient's Pryv account using the [Login](https://github.com/kebetsi/app-example-arkathon#login) part.
  
Otherwise, generate a token using the [app token generation app](https://pryv.github.io/app-web-access/?pryv-reg=reg.pryv.me)

## Login

If you wish to integrate a login for you app, this is for you.

- [src/www/login.html](https://github.com/kebetsi/app-example-arkathon/blob/master/src/www/login.html)
- [src/js/login.js](https://github.com/kebetsi/app-example-arkathon/blob/master/src/js/login.js)

Simple login used to obtain an app token, with which you will be able to create the data structure ([Streams](http://api.pryv.com/getting-started/javascript/#manage-streams)) and data
points ([Events](http://api.pryv.com/getting-started/javascript/#manage-events)), as well as [Access](http://api.pryv.com/getting-started/javascript/#manage-accesses) tokens for care takers, family, insurers and other eHeahlth stakeholders.

run `npm run login` to compile `login.js` with its dependencies in `dist/login.js`

Open `www/login.html` to display a simple web page containing the login button

## Structure creation

To generate the structure for you Pryv data, you may use the code in [src/js/createStructure.js](https://github.com/kebetsi/app-example-arkathon/blob/master/src/js/createStructure.js) to create it in a single [batch call](http://api.pryv.com/reference/#call-batch).

## Events creation

Simple example to create an event in [src/js/createEvent.js](https://github.com/kebetsi/app-example-arkathon/blob/master/src/js/createEvents.js)

## Events fetching

Simple example to fetch events in [src/js/getEvents.js](https://github.com/kebetsi/app-example-arkathon/blob/master/src/js/getEvents.js)

## Access creation

Simple example to create an access in [src/js/createAccess.js](https://github.com/kebetsi/app-example-arkathon/blob/master/src/js/createAccess.js)


