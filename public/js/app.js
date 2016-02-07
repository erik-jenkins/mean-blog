angular.module('mean-blog', ['ngRoute', 'ngSanitize'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostListCtrl'
      })
      .when('/post/:slug', {
        templateUrl: 'views/viewpost.html',
        controller: 'ViewPostCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/writepost', {
        templateUrl: 'views/writepost.html',
        controller: 'WritePostCtrl'
      })
      .when('/editpost/:slug', {
        templateUrl: 'views/editpost.html',
        controller: 'EditPostCtrl'
      })
      .otherwise({
        redirectTo: '/posts'
      });
  }]);
