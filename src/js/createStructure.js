var pryv = require('pryv');

var credentials = {
  username: 'testuser',
  auth: 'cj1989u0c0ym3x0yqdvnuwhjg',
  domain: 'pryv.me'
};

var connection = new pryv.Connection(credentials);

// structure
//
// body/
//  /leg
//    /left
//    /right
//  /head
//  /arm
//    /left
//    /right
//  /prescriptions
//  /

var streams = [
  {
    id: 'body',
    name: 'Body'
  },
  {
    id: 'legs',
    name: 'Legs',
    parentId: 'body'
  },
  {
    id: 'leg-left',
    name: 'Left leg',
    parentId: 'legs'
  },
  {
    id: 'leg-right',
    name: 'Right Leg',
    parentId: 'legs'
  },
  {
    id: 'head',
    name: 'Head'
  },
  {
    id: 'prescriptions',
    name: 'Prescriptions'
  },
];

var batchParams = [];

streams.forEach(function (stream) {
  batchParams.push({
    method:'streams.create',
    params: stream
  });
});

console.log('call', batchParams)

connection.batchCall(batchParams, function (err, results) {
  console.log('results', results);
});



