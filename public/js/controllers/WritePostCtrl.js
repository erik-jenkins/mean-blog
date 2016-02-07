angular.module('mean-blog')
  .controller('WritePostCtrl', ['$scope', '$http', '$location', 'auth',
  function($scope, $http, $location, auth) {

    if (!auth.isLoggedIn()) {
      $location.path('/');
    }

    $scope.submitPost = function() {
      $http({
        method: 'POST',
        headers: {Authorization: 'Bearer ' + auth.getToken()},
        url: '/api/posts/',
        data: $scope.post
      }).success(function(response) {
        $location.path('/');
      }).error(function(data) {
        switch(data.code) {
          case 11000:
            $scope.error = "Slug has already been used"
            break;
        }
      });
    };
  }]);
