angular.module('mean-blog')
  .factory('auth', ['$http', '$window', function($http, $window) {
    var auth = {};
      
    auth.login = function(user) {
      return $http({
        method: 'POST',
        url: '/api/login/',
        data: user
      });
    };
    
    auth.logout = function() {
      var token = auth.getToken();
      
      if (token) {
        $window.localStorage.removeItem('eriks-blog-token');
      }
    };
    
    // check to make sure user is logged in
    auth.isLoggedIn = function() {
      var token = auth.getToken();

      if (token) {
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };
    
    // retrieve the current user if logged in
    auth.currentUser = function() {
      if (auth.isLoggedIn()) {
        var token = auth.getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.username;
      }
    };
    
    // save JWT received from server to local storage
    auth.saveToken = function(token) {
      $window.localStorage['eriks-blog-token'] = token;
    };

    // retrieve JWT stored in local storage
    auth.getToken = function(token) {
      return $window.localStorage['eriks-blog-token'];
    };
    
    return auth;

  }]);
