angular.module('mean-blog')
  .controller('EditPostCtrl', ['$scope', '$location', '$routeParams', 'auth', 'post',
  function($scope, $location, $routeParams, auth, post) {
    
    if (!auth.isLoggedIn()) {
      $location.path('/');
    }
    
    post.getOne($routeParams.slug)
      .then(function(response) {
        $scope.post = response.data[0];
      }, function(err) {
        console.log(err);
      });
      
    $scope.editPost = function() {
      post.editPost($scope.post)
        .then(function(response) {
          $location.path('/');
        }, function(err) {
          $scope.error = err.message;
        });
    };
    
  }]);
