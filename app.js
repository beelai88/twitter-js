var express = require( 'express' );
var app = express(); // creates an instance of an express application

var swig = require('swig');
swig.setDefaults({ cache: false });

var router = express.Router();
var routes = require('./routes/');

var tweetBank = require('./tweetBank');


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));



// app.use('/', routes);

app.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;

app.listen(3000, function() {
	console.log('server listening...');
})

// var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

// app.use('/views', function(req, res, next) {
// 	res.render( 'index', {title: 'Hall of Fame', people: people}, function(err, html) {
// 		res.send(html);
// 	});	
// })


// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };


// swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
//     // console.log(output);
// });

// app.use(function (req, res, next) {
// 	// console.log(req.url); 
// 	// console.log(req.method);
// 	next();
// });

// app.use('/special', function (req, res, next) {
// 	res.send("You've reached the special page");
// 	next();
// });

// app.get('/', function(req, res) {
// 	res.send('Welcome!');
// });

// app.get('/news', function(req, res) {
// 	res.send('Here is the news:');
// });

