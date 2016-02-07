angular.module('mean-blog')
	.controller('MainCtrl', ['$scope', 'auth', 
	function($scope, auth) {
		
		$scope.$watch(auth.isLoggedIn, function(isLoggedIn) {
			$scope.isLoggedIn = isLoggedIn;
			$scope.user = auth.currentUser();
		});
		
		$scope.logout = function() {
			auth.logout();
		};
		
	}]);
