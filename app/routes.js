// models
var Post = require('./models/Post');

module.exports = function(app) {
  app.get('/api/posts', function(req, res) {
    // get all posts
    Post.find(function(err, posts) {
      res.json(posts);
    });
  });

  app.get('/api/posts/:slug', function(req, res) {
    // get post by slug
    var slug = req.params.slug;
    Post.find({ slug: slug }, function(err, post) {
      res.json(post);
    });
  });

  app.post('/api/posts', function(req, res) {
    // submit post to database
    var post = new Post(req.body);
    post.save(function(err, post) {
      if(err) res.json({ error: true });
      res.json(post);
    });
  });
};
