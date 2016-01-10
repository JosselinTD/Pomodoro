'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var User = require("./../user/user.model.js");
var UserSchema = require('mongoose').model('User').schema;

var PomodoroSchema = new mongoose.Schema({
  name: String,
  ended: Boolean,
  comment: String,
  user: UserSchema
});

export default mongoose.model('Pomodoro', PomodoroSchema);
