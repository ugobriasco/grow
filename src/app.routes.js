app.config(['$stateProvider','$urlRouterProvider','$locationProvider', function($stateProvider,$urlRouterProvider, $locationProvider) {
   
   //$urlRouterProvider.otherwise('/');
   $locationProvider.html5Mode({
        enabled: false,  //minor issues 
        requireBase: false
    });
   $stateProvider
    .state('home',{
    	url: '',
    	templateUrl: '/components/home/home.view.html',
        controller: 'HomeController',
        caseInsensitiveMatch: true
    })
     .state('results',{
      url: '/results',
      templateUrl: '/components/results/results.view.html',
        controller: 'ResultsController',
        caseInsensitiveMatch: true
    });
   
}]);