(function () {
  'use strict';
  var x = 'hello'
  angular.module('assignment1App', [])

  .controller('InputTextContorller', function($scope) {
    $scope.input_text = "";
    $scope.message = "";
    $scope.checkIfTooMuch = function() {
      var count = $scope.input_text.split(",").length;
      if($scope.input_text.length == 0) {
        $scope.message = "Please enter data first";
      } else if (count <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  });

})();
