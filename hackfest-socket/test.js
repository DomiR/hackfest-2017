var needle = require('needle');

// use env port
const PORT = (process.env.PORT || 5000);
//const URL = 'http://localhost:' + PORT;
const URL = 'https://polar-shelf-82300.herokuapp.com';

needle.request('post', URL + '/publish', {
	test: 'some awesome apples'
}, { json: true }, (err, res) => {
	console.log(err);
	console.log(res.body);
})