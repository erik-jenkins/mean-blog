angular.module('mean-blog')
  .factory('PostService', ['$http', 'AuthService', 
  function($http, AuthService) {
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
    
    post.getByTag = function(tag) {
      return $http({
        method: 'GET',
        url: '/api/tag/' + tag
      });
    }
    
    post.submit = function(post) {
      return $http({
        method: 'POST',
        headers: {Authorization: 'Bearer ' + AuthService.getToken()},
        url: '/api/posts/',
        data: post
      });
    };
    
    post.editPost = function(post) {
      return $http({
        method: 'POST',
        headers: {Authorization: 'Bearer ' + AuthService.getToken()},
        url: '/api/edit/' + post.slug,
        data: post
      });
    };
    
    post.deletePost = function(slug) {
      return $http({
        method: 'GET',
        headers: {Authorization: 'Bearer ' + AuthService.getToken()},
        url: '/api/delete/' + slug
      });
    };
    
    return post;
    
  }]);
