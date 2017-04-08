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
    var filter = new pryv.Filter({limit: 5});
    console.log('startin monitor')
    monitor = conn.monitor(filter);

    monitor.start()
//This will use the local cache before fetching data online, default is true
    monitor.useCacheForEventsGetAllAndCompare = false;
// This will fetch all events on start up, default is true
    monitor.ensureFullCache = false;
// This will optimize start up by prefecthing some events, default is 100
    monitor.initWithPrefetch = 0;
    done();
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


