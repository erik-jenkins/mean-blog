angular.module('mean-blog')
  .controller('PostCtrl', ['$scope', '$state', 'PostService',
  function($scope, $state, PostService) {
    
    $scope.deletePost = function() {
      PostService.deletePost($scope.post.slug)
        .then(function(response) {
          $state.go('PostList', {}, {reload: true});
        }, function(err) {
          $scope.error = err.message;
        });
    };
        
  }]);
