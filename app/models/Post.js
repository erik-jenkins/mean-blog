var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: { type: String, required: 'Title is required' },
  slug: { type: String, required: 'Slug is required', index: { unique: true, dropDups: true } },
  timestamp: { type: Date, default: Date.now() },
  content: { type: String, required: true },
  tags: [String]
});

module.exports = mongoose.model('Post', postSchema);
