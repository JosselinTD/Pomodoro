'use strict';

angular.module('pomodoroApp')
  .service('PomodoroService', function ($http, socket, Auth) {
    var serv = this,
    	endpoint = '/api/pomodoros';
    serv.pomodoros = [];

    $http.get(endpoint).then(function(response){
    	response.data.forEach(function(pom){
    		serv.pomodoros.push(pom);
    	});
    	socket.syncUpdates('pomodoro', serv.pomodoros);
    });

    serv.findById = function(id){
    	var retour;
    	serv.pomodoros.some(function(pom){
    		if(pom._id === id){
    			retour = pom;
    			return true;
    		}
    	});
    	return retour;
    };

    serv.send = function(pomodoro){
    	if(pomodoro._id){
    		$http.put(endpoint+"/"+pomodoro._id, pomodoro);
    	} else {
    		pomodoro.user = Auth.getCurrentUser();
    		$http.post(endpoint, pomodoro);
    	}
    };

    serv.remove = function(id){
    	$http.delete(endpoint+"/"+id);
    }
  });
