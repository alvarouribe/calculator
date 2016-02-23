'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('ListCtrl', function ($scope) {
    
  var list = this;

  list.todos = [ {
  								text:'learn angular', 
  								done:true, 
  								numeros: ['one','two','3']
  							},
    						{
    							text:'build an angular app', 
    							done:false, 
    							numeros: ['one','two','3']
    						},
    					];


});

angular.module('angularTestApp')
.directive('clicMe',function(){
	return {
		restrict: 'A',
		scope: {
			todo: '='
		},
		controller: function($scope)
		{
			$scope.test = function() {
				window.alert('Binding a function from \'bind click\' on the Link function');
			}

			console.log('$scope');
			console.log($scope);
		},
		link: function(scope, element, attrs) 
		{
			element.bind('click', function() {
				console.log('you click me ')	;
				element.css({
					'background-color':'green'
				});
				
				scope.test();
				
				console.log('scope');
				console.log(scope);
				console.log('attrs');
				console.log(attrs);
				console.log('element');
				console.log(element);
			});
			
		} //end Link
	}
});