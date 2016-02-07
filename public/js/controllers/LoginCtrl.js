angular.module('mean-blog')
  .controller('LoginCtrl', ['$scope', '$location', 'auth',
  function($scope, $location, auth) {
    
    $scope.login = function() {
      auth.login($scope.user)
      	.success(function(response) {
      		auth.saveToken(response.token);
      		$location.path('/');
	      })
      	.error(function(response) {
      		$scope.error = response.message;
      	});
    };
    
  }]);
