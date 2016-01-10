'use strict';

angular.module('pomodoroApp')
  .service('PomodoroTimerService', function ($rootScope, $modal) {
    this.open = function(title){
    	var modalScope = $rootScope.$new();
    	modalScope.title = title;
    	modalScope.ended = false;
    	modalScope.showVideo = function(){
    		console.log("Ended !");
    		$rootScope.$apply(function(){
    			modalScope.ended = true;
    		});
    		
    	}
    	modalScope.isEnded = function(){
    		console.log("Is ended : "+modalScope.ended);
    		return modalScope.ended;
    	}

    	$modal.open({
    		templateUrl: 'components/pomodoro-timer/pomodoro-timer.html',
    		scope: modalScope
    	});
    };
  });
