'use strict';

describe('Directive: options', function () {

  // load the directive's module and view
  beforeEach(module('pomodoroApp'));
  beforeEach(module('components/options/options.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<options></options>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the options directive');
  }));
});
