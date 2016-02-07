angular.module('mean-blog')
  .factory('post', ['$http', function($http) {
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
    
    return post;
    
  }]);
