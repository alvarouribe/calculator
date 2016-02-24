'use strict';

/**
 * @ngdoc filter
 * @name angularTestApp.filter:filterMultiple
 * @function
 * @description
 * # filterMultiple
 * Filter in the angularTestApp.
 */
angular.module('angularTestApp')
  .filter('filterMultiple', function () {
    return function (input) {
      return 'filterMultiple filter: ' + input;
    };
  });
