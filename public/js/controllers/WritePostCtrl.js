angular.module('mean-blog')
  .controller('WritePostCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {

    $scope.submitPost = function() {
      $http.post('/api/posts', $scope.post)
        .success(function(data, status) {
          if (data.error) {
            $scope.error = data.error;
          } else {
            $location.path('/');
          }
        }
      );
    };
  }]);
