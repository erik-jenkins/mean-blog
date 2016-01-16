angular.module('mean-blog')
  .controller('PostListCtrl', ['$scope', function($scope) {

    $scope.posts = [
      {
        id: '1',
        title: 'Lorem Ipsum',
        timestamp: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: ['lorem', 'ipsum', 'dolor']
      },
      {
        id: '2',
        title: 'Gregor Samsa',
        timestamp: new Date(),
        content: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.',
        tags: ['gregor', 'samsa', 'metamorphosis']
      }
    ];

  }]);
