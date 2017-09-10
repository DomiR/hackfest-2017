var mosca = require('mosca');
var needle = require('needle');

var ascoltatore = {
  //using ascoltatore
  type: 'memory',
};

var settings = {
  port: 1883,
  backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  var payload = packet.payload.toString('utf8');
  // console.log('Published', payload);
  console.log(payload);
  needle.request('post', 'https://techfestmunich.herokuapp.com/', payload, {json: true}, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      // noop
    }
  })
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}