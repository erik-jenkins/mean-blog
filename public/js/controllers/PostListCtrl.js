angular.module('mean-blog')
  .controller('PostListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.posts = '';

    $http({
      method: 'GET',
      url: '/api/posts'
    }).then(function(response) {
      $scope.posts = response.data;
    }, function(err) {
      console.log(err);
    });
  }]);
