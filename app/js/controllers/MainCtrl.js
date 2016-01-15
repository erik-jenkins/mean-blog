angular.module('mean-blog')
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.message = '';

    $http({
      method: 'GET',
      url: '/hello'
    }).then(function(response) {
      $scope.message = response.data;
    }, function(err) {
      console.log(err);
    });
  }]);
