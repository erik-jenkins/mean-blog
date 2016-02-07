// JSON web token
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

// mongoose
var mongoose = require('mongoose');

// passport
var passport = require('passport');

// models
var Post = require('./models/Post');
var User = require('./models/User');

module.exports = function(app) {
  
  // get all posts, ordered by time
  app.get('/api/posts', function(req, res) {
    Post.find()
      .sort({ timestamp: -1 })
      .exec(function(err, posts) {
        if (err) {
          res.json(err);
        }
        
        res.json(posts);
      });
  });

  // get post by slug
  app.get('/api/posts/:slug', function(req, res) {
    var slug = req.params.slug;
    
    Post.find({ slug: slug }, function(err, post) {
      if(err) { 
        res.json(err);
      }
      
      res.json(post);
    });
  });

  app.post('/api/posts', auth, function(req, res) {
    // submit post to database
    var post = new Post(req.body);
    post.timestamp = Date.now();
    
    // attempt to save post
    post.save(function(err, post) {
      if (err) {
        res.status(400).json(err);
      }
      
      res.json(post);
    });
  });

  app.post('/api/login', function(req, res, next) {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: 'Please fill out all fields' });
    }

    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }

      if (user) {
        return res.json({ token: user.generateJWT() });
      } else {
        return res.status(401).json(info);
      }
    })(req, res, next);
  });
};
