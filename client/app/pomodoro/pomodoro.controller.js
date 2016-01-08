'use strict';

angular.module('pomodoroApp')
  .controller('PomodoroCtrl', function ($scope, Auth, $location, $http, socket, PomodoroService, PomodoroModal) {
    if(!Auth.isLoggedIn()){
    	$location.path('/login');
    }
    $scope.pomodoros = PomodoroService.pomodoros;

    $scope.openPomodoroModal = PomodoroModal.open;

    $scope.userFilter = function(pom){
    	return pom.user._id === Auth.getCurrentUser()._id;
    };
  });
