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
        $scope.total = $scope.row1.total + $scope.row2.total + $scope.row3.total + $scope.row4.total;
        // console.log('subTotal:' + $scope.total);
      }
      
      $scope.$watch('row1.total', $scope.sumSubtotal);
      $scope.$watch('row2.total', $scope.sumSubtotal);
      $scope.$watch('row3.total', $scope.sumSubtotal);
      $scope.$watch('row4.total', $scope.sumSubtotal);
      // console.log($scope.componentAttributes.location); //I can access the $scope
    },
    link: function(scope) {
      // console.log(scope);

      // I will run SECOND when the directive it is found 
      //I can create isolated variables that are only visible in the view
      scope.open = true;
      
      scope.row1 = {};
      scope.row2 = {};
      scope.row3 = {};
      scope.row4 = {};
    }
  };
});