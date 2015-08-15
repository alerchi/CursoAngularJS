angular.module('jsoop.controllers', [])

.controller('HomeController', function($scope) {
	var hello= function(message){

			console.log(message);

	};

	$scope.model_1={}; //Objeto vacio
	$scope.model={ //Objeto con atributos
		name:'Fulano',
		phone:12345,
		active:false,
		print: function(){

			console.log('Hola mundo');
		},
		say: hello
	};


})

.controller('AboutController',[ '$scope', function() {

}]);