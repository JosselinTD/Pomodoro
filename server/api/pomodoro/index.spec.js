'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pomodoroCtrlStub = {
  index: 'pomodoroCtrl.index',
  show: 'pomodoroCtrl.show',
  create: 'pomodoroCtrl.create',
  update: 'pomodoroCtrl.update',
  destroy: 'pomodoroCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pomodoroIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './pomodoro.controller': pomodoroCtrlStub
});

describe('Pomodoro API Router:', function() {

  it('should return an express router instance', function() {
    pomodoroIndex.should.equal(routerStub);
  });

  describe('GET /api/pomodoros', function() {

    it('should route to pomodoro.controller.index', function() {
      routerStub.get
        .withArgs('/', 'pomodoroCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/pomodoros/:id', function() {

    it('should route to pomodoro.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'pomodoroCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/pomodoros', function() {

    it('should route to pomodoro.controller.create', function() {
      routerStub.post
        .withArgs('/', 'pomodoroCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/pomodoros/:id', function() {

    it('should route to pomodoro.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'pomodoroCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/pomodoros/:id', function() {

    it('should route to pomodoro.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'pomodoroCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/pomodoros/:id', function() {

    it('should route to pomodoro.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'pomodoroCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
