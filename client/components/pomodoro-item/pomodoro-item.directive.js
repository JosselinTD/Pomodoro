'use strict';

angular.module('pomodoroApp')
  .directive('pomodoroItem', function () {
    return {
      templateUrl: 'components/pomodoro-item/pomodoro-item.html',
      restrict: 'E',
      controller: 'PomodoroItemCtrl',
      controllerAs: 'itemCtrl',
      scope: {
      	pomodoro: '='
      }
    };
  });
