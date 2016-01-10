'use strict';

angular.module('pomodoroApp')
  .config(function($routeProvider) {
  	$routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html'
      });
  });
