blackBelt.controller('VotesController',
  function(
    $scope,
    UserFactory,
    PollFactory,
    $location,
    $rootScope,
    $routeParams){

      $scope.poll = [];

      PollFactory.getPollById($routeParams.id, function(pollData){
        console.log("params id is ", $routeParams.id)
        $scope.poll = pollData;
      })

      $scope.vote = function(option, pollId){
        console.log("the selected option was", option, "id is ", pollId)
        data = {
          option: option,
          pollId: pollId
        }
        PollFactory.vote(data, function(response){
          console.log('getting back to votes controller', response)
          $scope.poll = response;
        })
      }


  });
