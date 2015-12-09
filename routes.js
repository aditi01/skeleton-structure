function initialize(app, db) {
	var mongodb = require("mongodb"); 
	var mongoClient = require("mongodb").MongoClient;

	console.log("Request about to be routed");
	app.get('/', function(req, res) { // GET ajax request for Requesting to display of the HTML page
		console.log("Request to / has been recieved");
		res.render('index.html'); //renders the html page onto the browser
	});

	//write the api end-points here and the respective mongodb function goes here
}

exports.initialize = initialize;