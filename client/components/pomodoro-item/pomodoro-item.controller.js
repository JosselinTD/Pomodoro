'use strict';

angular.module('pomodoroApp')
  .controller('PomodoroItemCtrl', function ($scope, PomodoroModal, PomodoroService) {
    $scope.openPomodoroModal = function(){
    	console.log($scope.pomodoro._id);
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
  });
