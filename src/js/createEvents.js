var pryv = require('pryv');


var conn = new pryv.Connection({
  username: 'testuser',
  auth: 'cj1989u0c0ym3x0yqdvnuwhjg',
  domain: 'pryv.me'
});

var event = {
  streamId: 'diary',
  type: 'patient-profile/full',
  content: {
    address: '11 rue du technoark',
    postalCode: '3012',
    city: 'Sierre',
    weightKg: '80',
    height: '180'
  }
};

conn.events.create(event, function (err, event) {
  console.log('event', event.getData());
});