var express = require('express');
app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('app'));

app.listen(app.get('port'), function() {
  console.log("Express listening on port " + app.get('port'));
});
