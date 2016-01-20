angular.module('mean-blog')
  .controller('WritePostCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {

    $scope.submitPost = function() {
      // $http.post('/api/posts', $scope.post)
      //   .success(function(data, status) {
      //     if (data.error) {
      //       console.log(data.error);
      //     } else {
      //       $location.path('/');
      //     }
      //   }
      // );
        
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
