'use strict';

describe('Controller: PomodoroItemCtrl', function () {

  // load the controller's module
  beforeEach(module('pomodoroApp'));

  var PomodoroItemCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PomodoroItemCtrl = $controller('PomodoroItemCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
