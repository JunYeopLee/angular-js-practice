(function () {
  'use strict';
  var x = 'hello'
  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "JunyeopLee";
    $scope.sayHello = function() {
      return "Hello coursera";
    };
  });

})();
