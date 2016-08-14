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
app.controller('InputController',['$scope', '$uibModalInstance','MrrCalc',function($scope, $uibModalInstance, MrrCalc){

	
	$scope.data = MrrCalc.getBalanceSheet();
	// $scope.data.costs = [{
	// 	name: 'G&A',
	// 	value: 0
	// }];
	$scope.addRow = function (){$scope.data.costs.push({});}
	$scope.removeRow = function(idx){$scope.data.costs.splice(idx,1);}

	

	$scope.submit = function(currency, mrr, mrc) {

		MrrCalc.setCurrency(currency);
		MrrCalc.setMRR(mrr);
		MrrCalc.setMRC(mrc);
		MrrCalc.getBalanceSheet();
		
		
		$uibModalInstance.dismiss('close');
	}

	$scope.cancel = function(){
		
		$uibModalInstance.dismiss('close');
	}

}]);


app.controller('ConfigurationsController',['$scope', '$uibModalInstance', 'MrrCalc', function($scope, $uibModalInstance, MrrCalc){

	$scope.data = MrrCalc.getBalanceSheet();

	$scope.submit = function(churn, gei) {
		MrrCalc.setMonthlyChurn(churn);
		MrrCalc.setGEI(gei);
		MrrCalc.getBalanceSheet();
		
		
		$uibModalInstance.dismiss('close');
	}


	$scope.cancel = function(){
		$uibModalInstance.dismiss('close');
	}

}]);

app.controller('StrategyController',['$scope', '$uibModalInstance', 'MrrCalc', function($scope, $uibModalInstance, MrrCalc){

	$scope.data = MrrCalc.getBalanceSheet();

	$scope.submit = function(cac) {
		MrrCalc.setMonthlyCAC(cac);
		MrrCalc.getBalanceSheet();
		
		
		$uibModalInstance.dismiss('close');
	}

	$scope.cancel = function(){
		$uibModalInstance.dismiss('close');
	}

}]);
