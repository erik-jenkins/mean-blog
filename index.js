var assert  = require('assert');
var express = require('express');
var mongo   = require('mongodb').MongoClient;
app = express();

var dbURI = 'mongodb://heroku_9dr87f8p:f1jndcla6mb8cps74d7iplass9@ds047075.mongolab.com:47075/heroku_9dr87f8p';
mongo.connect(dbURI, function(err, db) {
  assert.equal(null, err);

  app.set('port', (process.env.PORT || 5000));

  app.use(express.static('app'));

  app.listen(app.get('port'), function() {
    console.log("Express listening on port " + app.get('port'));
  });
});
