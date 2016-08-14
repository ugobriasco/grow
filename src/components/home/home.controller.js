app.controller('HomeController',['$scope','$state', function($scope, $state){

	$scope.calculateResult = function(){
		return $state.go('results');
	}
	

}]);