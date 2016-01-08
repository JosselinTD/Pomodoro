'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var UserSchema = require('mongoose').model('User').schema;

var PomodoroSchema = new mongoose.Schema({
  name: String,
  ended: Boolean,
  comments: [mongoose.Schema.Types.Mixed],
  user: UserSchema
});

export default mongoose.model('Pomodoro', PomodoroSchema);
