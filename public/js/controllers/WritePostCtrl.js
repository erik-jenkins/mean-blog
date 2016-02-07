angular.module('mean-blog')
  .controller('WritePostCtrl', ['$scope', '$location', 'auth', 'post',
  function($scope, $location, auth, post) {

    if (!auth.isLoggedIn()) {
      $location.path('/');
    }
      
    $scope.submitPost = function() {
      post.submit($scope.post)
        .then(function(response) {
          $location.path('/');
        }, function(err) {
          switch(err.code) {
            case 11000:
              $scope.error = "Slug has already been used"
              break;
          }
        });
    };
    
  }]);
