app.controller('PaletteController', ['$scope', '$state', '$uibModal',function($scope, '$state', '$uibModal') {
            
	$scope.openInput = function(size, _data){
		var modalInstance = $uibModal.open({
			templateUrl: 'InputController',
			size: size,
			resolve:{
				data: function(){return _data}
			}
		});
	}

}]);


app.controller('InputController',['$scope', '$uibModalInstance', 'data', function($scope, $uibModalInstance, data){

	$scope.cancel = function(){
		$uibModalInstance.dismiss('close');
	}

}]);

