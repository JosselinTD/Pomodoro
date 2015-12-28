'use strict';

angular.module('pomodoroApp')
  .service('PomodoroModal', function (PomodoroService, $modal, $rootScope) {
  	var pomodoro;
  	function pomBase(){
  		return {
	  		name: '',
	  		ended: false,
	  		comments: []
	  	};
  	}
    this.open = function(id){
    	var modal;
    	pomodoro = pomBase();
    	if(id){
    		angular.extend(pomodoro, angular.copy(PomodoroService.findById(id)));
    	}

    	var modalScope = $rootScope.$new();
      	modalScope.pomodoro = pomodoro;
      	modalScope.sendPomodoro = function(){
      		PomodoroService.send(pomodoro);
      		modal.close();
      	}

    	modal = $modal.open({
    		templateUrl: 'components/pomodoro-modal/pomodoro-modal.html',
    		scope: modalScope
    	});
    }
  });
