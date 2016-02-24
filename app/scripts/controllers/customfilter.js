'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:CustomfilterCtrl
 * @description
 * # CustomfilterCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('CustomfilterCtrl', function () {
	  
	  this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	  this.test = "Yes";
	    this.empList = [
	                    {"dept":"account","name":"John","gender":"male"},
	                    {"dept":"sales","name":"Ram","gender":"male"},
	                    {"dept":"travel","name":"Peter","gender":"male"},
	                    {"dept":"hr","name":"jane","gender":"male"},
	                    {"dept":"account","name":"rose","gender":"female"},
	                    {"dept":"sales","name":"mary","gender":"female"},
	                    {"dept":"sales","name":"mark","gender":"male"},
	                    {"dept":"account","name":"maria","gender":"female"},
	                    {"dept":"travel","name":"lee","gender":"male"},
	                    {"dept":"sales","name":"hulk","gender":"male"},
	                    {"dept":"hr","name":"spiderman","gender":"male"},
	                    {"dept":"travel","name":"potter","gender":"male"}
	                ];

  });
