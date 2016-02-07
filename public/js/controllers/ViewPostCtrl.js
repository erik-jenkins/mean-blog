angular.module('mean-blog')
  .controller('ViewPostCtrl', ['$scope', '$routeParams', 'post',
  function($scope, $routeParams, post) {

    post.getOne($routeParams.slug)
      .then(function(response) {
        $scope.post = response.data[0];
      }, function(err) {
        console.log(err);
      });

  }]);
