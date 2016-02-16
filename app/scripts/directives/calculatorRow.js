'use strict';

angular.module('angularTestApp').directive('calculatorRow', function() {
  return {
    restrict: 'E',
    replace: 'true',
    scope: {
        row: '='
    },
    template: '<tr>' +
                '<td><input type="number" style="width:60px"  min="0" id="left_txt_0"  ng-model="row.left"     ng-blur="printLeft(row.left)"> x </td>' + 
                '<td><input type="number" style="width:60px"  min="0" id="right_txt_0" ng-model="row.right"    ng-blur="printRight(row.right)"> = </td> ' +
                '<td><input type="number" style="width:60px" min="0" id="total_0"     ng-model="row.total" readonly="true"></td> ' +
              '</tr>'
    ,
    controller: function($scope) {    
        // console.log($scope);

        $scope.printLeft = function(left) {
            if ($scope.row.right > 0) {
               $scope.row.total =  left * $scope.row.right;
            }
        }
        $scope.printRight = function(right) {
            if ($scope.row.left > 0) {
               $scope.row.total =  $scope.row.left * right;
            }
        }
    },
    link: function(scope, element, attrs) {
        scope.row.left = 0;
        scope.row.right = 0;
        scope.row.total = 0;
    }

  }
    
});