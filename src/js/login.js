var pryv = require('pryv');

var credentials = null;
var pryvDomain = 'pryv.me';
var requestedPermissions = [
  {
    streamId: '3d-models',
    defaultName: 'Notes',
    level: 'manage'
  },
  {
    streamId: 'foot',
    defaultName: 'Foot',
    level: 'manage'
  }];

// use this to make API calls after acquiring the credentials through a successful login
var connection;

var settings = {
  requestingAppId: 'homepod',
  requestedPermissions: requestedPermissions,
  spanButtonID: 'pryv-button',
  callbacks: {
    initialization: function () {
      console.log('initialization')
    },
    needSignin: function (popupUrl, pollUrl, pollRateMs) {
      // ignore this
    },
    signedIn: function (authData) {
      // now you may use the connection object to make API calls to https://username.pryv.me

      connection = new pryv.Connection({
        username: credentials.username,
        auth: credentials.token,
        domain: pryvDomain
      })
    },
    refused: function (code) {
      // ignore
      console.log('refused', code)
    },
    error: function (code, message) {
      // ignore
      console.log('got error, code:', code, ', message', message)
    }
  }
};

pryv.Auth.config.registerURL.host = 'reg.' + pryvDomain;
// starts login
pryv.Auth.setup(settings);

