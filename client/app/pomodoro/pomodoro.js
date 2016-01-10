'use strict';

angular.module('pomodoroApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pomodoro', {
        templateUrl: 'app/pomodoro/pomodoro.html',
        controller: 'PomodoroCtrl',
        authenticate: true
      });
  });
