'use strict';

angular.module('pomodoroApp.auth', [
  'pomodoroApp.constants',
  'pomodoroApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
