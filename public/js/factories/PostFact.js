angular.module('mean-blog')
  .factory('post', ['$http', 'auth', 
  function($http, auth) {
    var post = {};
    
    post.getAll = function() {
      return $http({
        method: 'GET',
        url: '/api/posts'
      });
    };
    
    post.getOne = function(slug) {
      return $http({
        method: 'GET',
        url: '/api/posts/' + slug
      });
    };
    
    post.submit = function(post) {
      return $http({
        method: 'POST',
        headers: {Authorization: 'Bearer ' + auth.getToken()},
        url: '/api/posts/',
        data: post
      });
    };
    
    post.editPost = function(post) {
      return $http({
        method: 'POST',
        headers: {Authorization: 'Bearer ' + auth.getToken()},
        url: '/api/editpost/' + post.slug,
        data: post
      });
    };
    
    return post;
    
  }]);
