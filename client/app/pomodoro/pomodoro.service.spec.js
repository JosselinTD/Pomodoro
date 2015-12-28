'use strict';

describe('Service: pomodoro', function () {

  // load the service's module
  beforeEach(module('pomodoroApp'));

  // instantiate service
  var pomodoro;
  beforeEach(inject(function (_pomodoro_) {
    pomodoro = _pomodoro_;
  }));

  it('should do something', function () {
    expect(!!pomodoro).toBe(true);
  });

});
