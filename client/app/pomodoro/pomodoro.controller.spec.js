'use strict';

describe('Controller: PomodoroCtrl', function () {

  // load the controller's module
  beforeEach(module('pomodoroApp'));

  var PomodoroCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PomodoroCtrl = $controller('PomodoroCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
