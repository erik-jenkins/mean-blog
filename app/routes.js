// mongoose
var mongoose = require('mongoose');

// models
var Post = require('./models/Post');

module.exports = function(app) {
  
  // get all posts, ordered by time
  app.get('/api/posts', function(req, res) {
    Post.find()
      .sort({ timestamp: -1 })
      .exec(function(err, posts) {
        if(err) res.json(err);
        res.json(posts);
      });
  });

  // get post by slug
  app.get('/api/posts/:slug', function(req, res) {
    var slug = req.params.slug;
    Post.find({ slug: slug }, function(err, post) {
      if(err) res.json(err);
      res.json(post);
    });
  });

  app.post('/api/posts', function(req, res) {
    // submit post to database
    var post = new Post(req.body);
    post.timestamp = Date.now();
    
    // attempt to save post
    post.save(function(err, post) {
      if (err) {
        console.log(err);
        res.status(400).json(err);
      }
      
      res.json(post);
    });
  });
};
