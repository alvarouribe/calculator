'use strict';

describe('Controller: CustomfilterCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestApp'));

  var CustomfilterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomfilterCtrl = $controller('CustomfilterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomfilterCtrl.awesomeThings.length).toBe(3);
  });
});
