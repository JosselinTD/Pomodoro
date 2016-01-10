'use strict';

angular.module('pomodoroApp')
  .controller('PomodoroItemCtrl', function ($scope, PomodoroModal, PomodoroService, PomodoroTimerService) {
    $scope.openPomodoroModal = function(){
    	PomodoroModal.open($scope.pomodoro._id);
    };
    $scope.toggleValidation = function(){
    	var swap = angular.copy($scope.pomodoro);
    	swap.ended = !swap.ended;
    	PomodoroService.send(swap);
    };
    $scope.removePomodoro = function(){
    	PomodoroService.remove($scope.pomodoro._id);
    };
    $scope.play = function(){
        PomodoroTimerService.open($scope.pomodoro.name);
    };
  });
