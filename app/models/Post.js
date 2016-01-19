var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  slug: { type: String, index: { unique: true, dropDups: true } },
  timestamp: { type: Date, default: new Date() },
  content: String,
  tags: [String]
});

module.exports = mongoose.model('Post', postSchema);
