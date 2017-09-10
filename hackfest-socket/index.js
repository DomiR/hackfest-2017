var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

// use env port
const PORT = (process.env.PORT || 5000);

// use json parser
app.use(bodyParser.json())

server.listen(PORT);
app.get('/', function(req, res) {
	res.send('WORKING :)');
})
app.post('/publish', function (req, res) {
	try {
		console.log('getting data', req.body);
		io.emit('message', req.body);
		res.sendStatus(200);
	} catch (e) {
		console.log('wrongly formatted data')
	}
});
console.log('Running on PORT:' + PORT);