app.controller('PaletteController', ['$scope', '$state', '$uibModal',function($scope, $state, $uibModal) {
            
	



	$scope.openInput = function(size){
		var modalInstance = $uibModal.open({
			templateUrl: './components/palette/modals/datainput.view.html',
			controller: 'InputController',
			size: size,
			// resolve:{
			// 	data: function(){return _data}
			// }
		});
	}

	$scope.openConfigurations = function(size){
		var modalInstance = $uibModal.open({
			templateUrl: './components/palette/modals/configurations.view.html',
			controller: 'ConfigurationsController',
			size: size,
			// resolve:{
			// 	data: function(){return _data}
			// }
		});
	}

	$scope.openStrategy = function(size){
		var modalInstance = $uibModal.open({
			templateUrl: './components/palette/modals/strategy.view.html',
			controller: 'StrategyController',
			size: size,
			// resolve:{
			// 	data: function(){return _data}
			// }
		});
	}

}]);



//Modals
app.controller('InputController',['$scope', '$uibModalInstance','ArrCalc',function($scope, $uibModalInstance, ArrCalc){

	
	$scope.data = ArrCalc.getBalanceSheet();
	// $scope.data.costs = [{
	// 	name: 'G&A',
	// 	value: 0
	// }];
	$scope.addRow = function (){$scope.data.costs.push({});}
	$scope.removeRow = function(idx){$scope.data.costs.splice(idx,1);}

	

	$scope.submit = function(currency, arr, arc) {
		ArrCalc.setCurrency(currency);
		ArrCalc.setRecurringRevenue(arr);
		ArrCalc.setRecurringCosts(arc);
		ArrCalc.getBalanceSheet();
		$uibModalInstance.dismiss('close');
	}

	$scope.cancel = function(){
		
		$uibModalInstance.dismiss('close');
	}

}]);


app.controller('ConfigurationsController',['$scope', '$uibModalInstance', 'ArrCalc', function($scope, $uibModalInstance, ArrCalc){

	$scope.data = ArrCalc.getBalanceSheet();

	$scope.submit = function(churn, gei) {
		ArrCalc.setChurn(churn);
		ArrCalc.setGEI(gei);
		ArrCalc.getBalanceSheet();
		$uibModalInstance.dismiss('close');
	}


	$scope.cancel = function(){
		$uibModalInstance.dismiss('close');
	}

}]);

app.controller('StrategyController',['$scope', '$uibModalInstance', 'ArrCalc', function($scope, $uibModalInstance, ArrCalc){

	$scope.data = ArrCalc.getBalanceSheet();

	$scope.submit = function(acv_cost) {
		ArrCalc.setACVcost(acv_cost);
		ArrCalc.getBalanceSheet();
		$uibModalInstance.dismiss('close');
	}

	$scope.cancel = function(){
		$uibModalInstance.dismiss('close');
	}

}]);
