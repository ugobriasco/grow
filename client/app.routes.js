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
        controller: '',
        caseInsensitiveMatch: true
    });
   
}]);