'use strict';

angular.module('pomodoroApp')
  .directive('pomodoroTimer', function () {
    return {
      templateUrl: 'components/pomodoro-timer/pomodoro-timer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
