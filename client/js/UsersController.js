blackBelt.controller('UsersController',
  function($scope, UserFactory, $location, $rootScope){
    $scope.users = [];


    $scope.login = function(User){
      // console.log("data is", User)
      UserFactory.create(User, function(users){
        $scope.users = users;
        // $rootScope.userId =
        $location.path('/polls')
      })
    }

    $scope.logout = function(){
      $rootScope.userId = null;
      $location.path('/login')
    }
  });
