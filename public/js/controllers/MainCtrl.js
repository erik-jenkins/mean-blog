angular.module('mean-blog')
	.controller('MainCtrl', ['$scope', 'AuthService', 
	function($scope, AuthService) {
		
		$scope.$watch(AuthService.isLoggedIn, function(isLoggedIn) {
			$scope.isLoggedIn = isLoggedIn;
			$scope.user = AuthService.currentUser();
		});
		
		$scope.logout = function() {
			AuthService.logout();
		};
		
	}]);
