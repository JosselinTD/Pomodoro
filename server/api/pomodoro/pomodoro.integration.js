'use strict';

var app = require('../..');
import request from 'supertest';

var newPomodoro;

describe('Pomodoro API:', function() {

  describe('GET /api/pomodoros', function() {
    var pomodoros;

    beforeEach(function(done) {
      request(app)
        .get('/api/pomodoros')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pomodoros = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      pomodoros.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/pomodoros', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/pomodoros')
        .send({
          name: 'New Pomodoro',
          info: 'This is the brand new pomodoro!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPomodoro = res.body;
          done();
        });
    });

    it('should respond with the newly created pomodoro', function() {
      newPomodoro.name.should.equal('New Pomodoro');
      newPomodoro.info.should.equal('This is the brand new pomodoro!!!');
    });

  });

  describe('GET /api/pomodoros/:id', function() {
    var pomodoro;

    beforeEach(function(done) {
      request(app)
        .get('/api/pomodoros/' + newPomodoro._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pomodoro = res.body;
          done();
        });
    });

    afterEach(function() {
      pomodoro = {};
    });

    it('should respond with the requested pomodoro', function() {
      pomodoro.name.should.equal('New Pomodoro');
      pomodoro.info.should.equal('This is the brand new pomodoro!!!');
    });

  });

  describe('PUT /api/pomodoros/:id', function() {
    var updatedPomodoro;

    beforeEach(function(done) {
      request(app)
        .put('/api/pomodoros/' + newPomodoro._id)
        .send({
          name: 'Updated Pomodoro',
          info: 'This is the updated pomodoro!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPomodoro = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPomodoro = {};
    });

    it('should respond with the updated pomodoro', function() {
      updatedPomodoro.name.should.equal('Updated Pomodoro');
      updatedPomodoro.info.should.equal('This is the updated pomodoro!!!');
    });

  });

  describe('DELETE /api/pomodoros/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/pomodoros/' + newPomodoro._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when pomodoro does not exist', function(done) {
      request(app)
        .delete('/api/pomodoros/' + newPomodoro._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
