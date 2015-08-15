
angular.module('navigation', ['ngRoute'])


.config(function($stateProvider,$urlRouterProvider) { //contiene un string y una funcion
  
  $stateProvider
  
	  .state('home',{ //por cada pagina va uno de estos states.
	  	url:'/',
	  	templateUrl:'views/home.html'//,
	  	//controller:'HomeController'
	  })

	  .state('about',{ //por cada pagina va uno de estos states.
	  	url:'/about',
	  	templateUrl:'views/about.html'//,
	  	//controller:'HomeController'
	  });

  $routeProvider.otherwise({redirectTo:'/'});
});

