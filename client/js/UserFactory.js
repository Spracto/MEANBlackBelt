blackBelt.factory('UserFactory', function($http, $rootScope){
  var factory = {};
  var Users = [];

  factory.create = function(User, callback){
    // console.log('getting to factory', User)
    $http.post('/createUser', User).success(function(newUser){
      // console.log("new User data is", newUser)
      $rootScope.userId = newUser._id;
      // console.log("the user id in rootScope is ",$rootScope.userId)
      Users.push(newUser);
      callback(Users);
    });
  }

  factory.index = function(callback){
    $http.get('/users').success(function(userData){
      Users = userData;
      // console.log('userData in factory is', userData)
      callback(Users);
    });
  }
  return factory;
});
