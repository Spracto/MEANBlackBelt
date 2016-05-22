blackBelt.controller('PollsController',
  function($scope, UserFactory, PollFactory, $location, $rootScope){
    $scope.polls = [];
    $scope.users = [];

    UserFactory.index(function(users){
      $scope.users = users;
      // console.log('users data', users)
    });

    PollFactory.index(function(polls){
      for(var i=polls.length-1; i>=0; i--){
        for(var k=$scope.users.length-1; k>=0; k--){
          if(polls[i]._user == $scope.users[k]._id){
            polls[i].userName = $scope.users[k].name
          }
          if(polls[i]._user == $rootScope.userId){
            polls[i].delete = true;
          }
        }
      }
      $scope.polls = polls;
      // console.log("poll data", polls)
    });


    $scope.createPoll = function(poll){
      poll.createdAt = moment();
      poll._user = $rootScope.userId
      // console.log("poll data is", poll)
      PollFactory.create(poll, function(pollResponse){
        $scope.polls = pollResponse;
        $location.path('/polls')
      });
    }

    $scope.logout = function(){
      $rootScope.userId = null;
      $location.path('/')
    }
});
