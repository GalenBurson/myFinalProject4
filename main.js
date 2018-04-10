var express = require("express");

// req mySQL module so we can talk to the database
//var mysql = require("mysql");

// require bodyParser to handle POST request from forms
var bodyParser = require("body-parser");

var path = require("path");
var app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/family", function(req, res) {
	res.render("family");
});

app.get("/contact", function(req, res) {
	res.render("contact");
});

app.get("/about", function(req, res) {
	res.render("about");
});



// ROUTES

// home route - http:localhost:3000
/*
app.get("/", function(req, res) {
	res.render("index");
});

// manage issues route - http: localhost:3000/manage-issues
app.get("/manage-issues", function(req, res) {
	res.render("manage");
});

// set up a route to post form data to
// Routes
app.get('/', function(req, res) {
	res.render('index');
});

app.post('/save-issue', function(req, res) {
	var con = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'groupprojectdb'
	});

	var sql =
		"INSERT INTO resources (name, title, type, category, contributor, description, url) VALUES ('" +
		req.body.inputName + 
		"', '" +
		req.body.inputTitle +
		"', '" +
		req.body.inputType +
		"', '" +
		req.body.inputCategory +
		"', '" +
		req.body.inputContributor +
		"', '" +
		req.body.inputDescription +
		"', '" +
		req.body.inputURL +
		"')";

		console.log(sql);

	con.query(sql, function(err, result) {
		if (err) {
			throw err;
		}

		console.log('1 record inserted');
		res.render('index', { inserted: true });
	});
});

app.get('/issues', function(req, res) {
	var con = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'mapapp'
	});

	var sql = 'SELECT * FROM issues JOIN types ON issues.type_id = types.id';

	con.query(sql, function(err, result, fields) {
		if (err) {
			throw err;
		}
		res.json(result);
	});
});
*/
app.listen(3000, function() {
	console.log('The application is running on port 3000');
});