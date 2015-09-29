
    var values = [
        "very sad",
        "sad",
        "not so sad",
        "happy",
        "very happy"
    ];

    var app = angular.module('myApp',[]);

    app.controller('myCtrl', function($scope){

    	$scope.name = "nice";
       	$scope.change= function(){
       		console.log($scope.name);
       		$scope.name = values[$scope.pitch];
       	};

    });



