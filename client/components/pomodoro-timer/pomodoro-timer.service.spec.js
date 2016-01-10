'use strict';

describe('Service: pomodoroTimer', function () {

  // load the service's module
  beforeEach(module('pomodoroApp'));

  // instantiate service
  var pomodoroTimer;
  beforeEach(inject(function (_pomodoroTimer_) {
    pomodoroTimer = _pomodoroTimer_;
  }));

  it('should do something', function () {
    expect(!!pomodoroTimer).toBe(true);
  });

});
