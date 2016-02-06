var bodyParser = require('body-parser');
var database = require('./config/database');
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');

// configure express
var app = express();
app.use(express.static('public'));
var port = process.env.PORT || 5000;

// connect to database
mongoose.connect(database.URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// middleware
app.use(bodyParser.json());
app.use(passport.initialize());

// routes
require('./app/routes.js')(app);

// configure passport
require('./config/passport');

// listen
app.listen(port);
console.log("Express application listening on port " + port);
