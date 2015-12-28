'use strict';

angular.module('pomodoroApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/pomodoro/pomodoro.html',
        controller: 'PomodoroCtrl',
        authenticate: true
      });
  });
