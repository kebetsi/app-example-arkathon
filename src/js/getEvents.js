var pryv = require('pryv');

var credentials = {
  username: 'testuser',
  auth: 'cj1989u0c0ym3x0yqdvnuwhjg',
  domain: 'pryv.me'
};

var connection = new pryv.Connection(credentials);


// available parameters are described in the API reference: http://api.pryv.com/reference/#get-events
var params = {
  streams: ['diary', 'body'],
  limit: 100
};

connection.events.get(params, function (err, events) {
  events.forEach(function (e) {
    console.log(e.getData())
  })
})