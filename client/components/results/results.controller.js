app.controller('ResultsController',['$scope', 'ArrCalc', function($scope, ArrCalc){

	

}]);


app.controller('BalanceSheetController',['$scope', 'ArrCalc', function($scope, ArrCalc){
	
	$scope.data = ArrCalc.getBalanceSheet();

}]);

app.controller('KpiController',['$scope', 'ArrCalc', function($scope, ArrCalc){

	

}]);

