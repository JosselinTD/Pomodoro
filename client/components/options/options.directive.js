'use strict';

angular.module('pomodoroApp')
  .directive('options', function () {
    return {
      templateUrl: 'components/options/options.html',
      restrict: 'E',
      replace: true
    };
  });
