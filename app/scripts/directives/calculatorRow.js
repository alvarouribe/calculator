'use strict';

angular.module('angularTestApp').directive('calculatorRow', function() {
  return {
    restrict: 'E',
    replace: 'true',
    scope: {},
    template: '<tr>' +
                '<td><input type="number" style="width:60px"  min="0" id="left_txt_0"  ng-model="left"     ng-blur="printLeft(left)"> x </td>' + 
                '<td><input type="number" style="width:60px"  min="0" id="right_txt_0" ng-model="right"    ng-blur="printRight(right)"> = </td> ' +
                '<td><input type="number" style="width:60px" min="0" id="total_0"     ng-model="subTotal" readonly="true"></td> ' +
              '</tr>'
    ,
    controller: function($scope) {    
        // console.log($scope);

        $scope.printLeft = function(left) {
            if ($scope.right > 0) {
               $scope.subTotal =  left * $scope.right;
               $scope.$parent.sumSubtotal(0, $scope.subTotal);
            }
        }
        $scope.printRight = function(right) {
            if ($scope.left > 0) {
               $scope.subTotal =  $scope.left * right;
               $scope.$parent.sumSubtotal(0, $scope.subTotal);
            }
        }
    },
    link: function(scope, element, attrs) {
        scope.left = 0;
        scope.right = 0;
        scope.subTotal = 0;
    }

  }
    
});