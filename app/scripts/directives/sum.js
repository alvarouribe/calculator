'use strict';

angular.module('angularTestApp').directive('sum', function() {
  return {
    restrict: 'A',
    
    controller: function($scope) {    
        // console.log($scope);

    },
    link: function(scope, element, attrs) {
      scope.$watch(element.html(), function(value) {
        console.log(value);
              // var htmlText = converter.makeHtml(element.html());
              // element.html(htmlText);
      });
    }

  }
    
});