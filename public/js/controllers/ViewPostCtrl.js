angular.module('mean-blog')
  .controller('ViewPostCtrl', ['$http', '$scope', '$routeParams',
  function($http, $scope, $routeParams) {

    $http({
      method: 'GET',
      url: '/api/posts/' + $routeParams.slug
    }).then(function(post) {
      $scope.post = post.data[0];
    }, function(err) {
      console.log(err);
    });

  }]);
