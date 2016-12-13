'use strict';

describe('Controller: NavigationcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('sbeeApp'));

  var NavigationcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavigationcontrollerCtrl = $controller('NavigationcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NavigationcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
