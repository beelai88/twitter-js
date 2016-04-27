var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.get('/', function(req, res) {
	res.send('Welcome!');
})

app.listen(3000, function() {
	console.log('server listening...');
})