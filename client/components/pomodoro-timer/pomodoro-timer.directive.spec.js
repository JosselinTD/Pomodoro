'use strict';

describe('Directive: pomodoroTimer', function () {

  // load the directive's module and view
  beforeEach(module('pomodoroApp'));
  beforeEach(module('components/pomodoro-timer/pomodoro-timer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pomodoro-timer></pomodoro-timer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the pomodoroTimer directive');
  }));
});
