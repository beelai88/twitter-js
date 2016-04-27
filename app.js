var express = require( 'express' );
var app = express(); // creates an instance of an express application


app.use(function (req, res, next) {

	console.log(req.url); 
	console.log(req.method);
	next();
});

app.use('/special', function (req, res, next) {
	res.send("You've reached the special page");
	next();
});

app.get('/', function(req, res) {
	res.send('Welcome!');
});

app.get('/news', function(req, res) {
	res.send('Here is the news:');
});

app.listen(3000, function() {
	console.log('server listening...');
})
