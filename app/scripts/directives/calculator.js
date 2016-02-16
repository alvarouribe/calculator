'use strict';

angular.module('angularTestApp').directive('calculator', function() {
  return {
    restrict: 'E',
    replace: 'false',
    templateUrl: 'views/directives/calculator.html',
    scope: {
      //I can bind attributes from outside of a directive
      total: '='
    },
    controller: function($scope) {    
      // console.log($scope);
      
      // I will run FIRST when the directive it is found 

      // I can create functions that are only visible in my directive so I can re use the directive anywhere
      $scope.toggleVisibility = function() {
        //I can change my isolated scope
        $scope.open = !$scope.open;
      }

      $scope.sumSubtotal = function(index, subTotal) {
        $scope.total = subTotal;
        // console.log('subTotal:' + $scope.total);
      }
      // console.log($scope.componentAttributes.location); //I can access the $scope
    },
    link: function(scope) {
      // console.log(scope);

      // I will run SECOND when the directive it is found 
      //I can create isolated variables that are only visible in the view
      scope.open = true;
    }
  };
});