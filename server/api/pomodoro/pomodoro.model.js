'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PomodoroSchema = new mongoose.Schema({
  name: String,
  ended: Boolean,
  comments: [mongoose.Schema.Types.Mixed]
});

export default mongoose.model('Pomodoro', PomodoroSchema);
