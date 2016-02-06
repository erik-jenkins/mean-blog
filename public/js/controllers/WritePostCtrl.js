angular.module('mean-blog')
  .controller('WritePostCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {

    $scope.submitPost = function() {
      $http({
        method: 'POST',
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
