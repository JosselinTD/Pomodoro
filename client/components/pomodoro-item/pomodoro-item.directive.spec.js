'use strict';

describe('Directive: pomodoroItem', function () {

  // load the directive's module and view
  beforeEach(module('pomodoroApp'));
  beforeEach(module('components/pomodoro-item/pomodoro-item.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pomodoro-item></pomodoro-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the pomodoroItem directive');
  }));
});
