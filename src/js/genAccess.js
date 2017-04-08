const pryv = require('pryv');
const async = require('async');

const creds = {
  username: 'kebetsi',
  auth: 'cj180ca750xxvx0yqz6uv9pjs',
  domain: 'pryv.me'
};

const conn = new pryv.Connection(creds);

var monitor;

async.series([

  function init(done) {
    conn.fetchStructure(function (err, streams) {
      streams.forEach(function (s) {
        console.log(s.getData());
      });
      done()
    });
  },
  function start(done) {
    conn.accesses.create()
  },
  function load(done) {


    var onLoad = pryv.MESSAGES.MONITOR.ON_LOAD;
    monitor.addEventListener(onLoad, function (events) {
      events.forEach(function (e) {
        console.log(e.getData())
      })
      done();
    });
  }
]);


