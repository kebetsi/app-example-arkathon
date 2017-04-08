var pryv = require('pryv');

var credentials = {
  username: 'testuser',
  auth: 'cj1989u0c0ym3x0yqdvnuwhjg',
  domain: 'pryv.me'
};

var connection = new pryv.Connection(credentials);

var access = {
  name: 'An Access',
  permissions: [
    {
      streamId: 'valid-stream-id',
      level: 'manage'
    }
  ]
};

connection.accesses.create(access, function (err, accessCreated) {
  console.log('created access', accessCreated);
});

