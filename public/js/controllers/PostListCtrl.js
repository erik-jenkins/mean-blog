angular.module('mean-blog')
  .controller('PostListCtrl', ['$scope', 'auth', 'post',
  function($scope, auth, post) {
    
    post.getAll()
      .then(function(response) {
        $scope.posts = response.data;
      }, function(err) {
        console.log(err);
      });
    
    $scope.$watch(auth.isLoggedIn, function(isLoggedIn) {
      $scope.isLoggedIn = isLoggedIn;
      $scope.user = auth.currentUser();
    });

    
  }]);
