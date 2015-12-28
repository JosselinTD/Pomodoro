'use strict';

describe('Service: pomodoroModal', function () {

  // load the service's module
  beforeEach(module('pomodoroApp'));

  // instantiate service
  var pomodoroModal;
  beforeEach(inject(function (_pomodoroModal_) {
    pomodoroModal = _pomodoroModal_;
  }));

  it('should do something', function () {
    expect(!!pomodoroModal).toBe(true);
  });

});
