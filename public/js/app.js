angular.module('mean-blog', ['ui.router', 'ngSanitize'])
  .config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
      .state('PostList', {
        url: '/',
        templateUrl: 'views/posts.html',
        resolve: {
          posts: ['PostService', function(PostService) {
            return PostService.getAll();
          }]
        },
        controller: ['$scope', 'posts', function($scope, posts) {
          $scope.posts = posts.data;
        }]
      })
      
      .state('ViewTag', {
        url: '/tag/:tag',
        templateUrl: '/views/posts.html',
        resolve: {
          posts: ['$stateParams', 'PostService', function($stateParams, PostService) {
            return PostService.getByTag($stateParams.tag);
          }]
        },
        controller: ['$scope', 'posts', function($scope, posts) {
          $scope.posts = posts.data;
        }]
      })
      
      .state('ViewPost', {
        url: '/post/:slug',
        templateUrl: 'views/partials/post.html',
        resolve: {
          post: ['$stateParams', 'PostService', function($stateParams, PostService) {
            return PostService.getOne($stateParams.slug);
          }]
        },
        controller: ['$scope', 'post', function($scope, post) {
          $scope.post = post.data;
        }]
      })
      
      .state('EditPost', {
        url: '/edit/:slug',
        templateUrl: 'views/editpost.html',
        resolve: {
          isLoggedIn: ['AuthService', function(AuthService) {
            return AuthService.isLoggedIn();
          }],
          post: ['$stateParams', 'PostService', function($stateParams, PostService) {
            return PostService.getOne($stateParams.slug);
          }]
        },
        controller: ['$scope', '$state', 'PostService', 'isLoggedIn', 'post', 
          function($scope, $state, PostService, isLoggedIn, post) {
            if (!isLoggedIn) {
              $state.go('PostList');
            }
            
            $scope.post = post.data;
            
            $scope.editPost = function() {
              PostService.editPost($scope.post)
                .then(function(response) {
                  $state.go('ViewPost', {slug: $scope.post.slug});
                }, function(err) {
                  $scope.error = err.message;
                });
            };
          }]
      })
      
      .state('Login', {
        url: '/login',
        templateUrl: 'views/login.html',
        resolve: {
          isLoggedIn: ['AuthService', function(AuthService) {
            return AuthService.isLoggedIn();
          }]
        },
        controller: ['$state', '$scope', 'AuthService', 'isLoggedIn',
          function($state, $scope, AuthService, isLoggedIn) {
            if (isLoggedIn) {
              $state.go('PostList');
            }
            
            $scope.login = function() {
              AuthService.login($scope.user)
                .then(function(response) {
                  AuthService.saveToken(response.data.token);
                  $state.go('PostList');
                }, function(err) {
                  $scope.error = err.message;
                });
            };
            
          }]
      })
      
      .state('WritePost', {
        url: '/write',
        templateUrl: 'views/writepost.html',
        resolve: {
          isLoggedIn: ['AuthService', function(AuthService) {
            return AuthService.isLoggedIn();
          }]
        },
        controller: ['$scope', '$state', 'isLoggedIn', 'PostService',
          function($scope, $state, isLoggedIn, PostService) {
            if (!isLoggedIn) {
              $state.go('PostList');
            }
            
            $scope.submitPost = function() {
              PostService.submit($scope.post)
                .then(function(response) {
                  $state.go('PostList');
                }, function(err) {
                  switch(err.code) {
                    case 11000:
                      $scope.error = "Slug has already been used"
                      break;
                  }
                });
            };
          }]
      });
    
    
    $urlRouterProvider.otherwise('/');
  
  }]);
