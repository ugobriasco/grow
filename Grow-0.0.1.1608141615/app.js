var app = angular.module('app',['ngRoute','ui.router','ui.bootstrap','googlechart']);


//shared directives

app.directive('footer', function(){
	return{
		restrict: 'A',
		replace: true,
		templateUrl: '/shared/partials/footer.view.html'
	}
});

app.directive('navbar', function(){
	return{
		restrict: 'A',
		replace: true,
		controller: '',
		templateUrl: '/shared/partials/navbar.view.html'
	}
});

app.directive('navbar1', function(){
	return{
		restrict: 'A',
		replace: true,
		controller: 'PaletteController',
		templateUrl: '/shared/partials/navbar1.view.html'
	}
});


app.directive('palette', function(){
	return{
		restrict: 'A',
		replace: true,
		controller: 'PaletteController',
		templateUrl: '/components/palette/palette.view.html'
	}
});

app.directive('balancesheet', function(){
	return{
		restrict: 'A',
		replace: true,
		controller: 'BalanceSheetController',
		templateUrl: '/components/results/partials/results.balanceSheet.view.html'
	}
});

app.directive('kpi', function(){
	return{
		restrict: 'A',
		replace: true,
		controller: 'KpiController',
		templateUrl: '/components/results/partials/results.kpi.view.html'
	}
});

app.directive('graphs', function(){
	return{
		restrict: 'A',
		replace: true,
		controller: 'GraphsController',
		templateUrl: '/components/results/partials/results.graphs.view.html'
	}
});

app.directive('statement', function(){
	return{
		restrict: 'A',
		replace: true,
		controller: 'StatementController',
		templateUrl: '/components/results/partials/results.statement.view.html'
	}
});
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
app.controller('HomeController',['$scope','$state', function($scope, $state){

	$scope.calculateResult = function(){
		return $state.go('results');
	}
	

}]);
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

app.controller('ResultsController',['$scope', 'MrrCalc', function($scope, MrrCalc){

	

}]);


app.controller('BalanceSheetController',['$scope', 'MrrCalc', function($scope, MrrCalc){
	
	$scope.data = MrrCalc.getBalanceSheet();


    $scope.detailsToggle = "false";



	

}]);

app.controller('KpiController',['$scope', 'MrrCalc', function($scope, MrrCalc){

	$scope.data = MrrCalc.getBalanceSheet();

    $scope.$watch(function(){
        $scope.kpi =  MrrCalc.getKPI();
    });
	
		


}]);

app.controller('StatementController',['$scope', 'MrrCalc', function($scope, MrrCalc){

	



	
	

		


}]);


app.controller('GraphsController',['$scope', 'MrrCalc', function($scope, MrrCalc){

	$scope.data = MrrCalc.getBalanceSheet();


	

	$scope.myChartObject = {};
    $scope.myChartObject.type = "ColumnChart";

    var t0 = [ {v: "Now"},{v: 0}, {v: 0}];
    var t1 = [ {v: "1mo+"},{v: 0}, {v: 0}];
    var t2 = [ {v: "2mo+"},{v: 0}, {v: 0}];
    var t3 = [ {v: "3mo+"},{v: 0}, {v: 0}];
    var t4 = [ {v: "4mo+"},{v: 0}, {v: 0}];
    var t5 = [ {v: "5mo+"},{v: 0}, {v: 0}];
    var t6 = [ {v: "6mo+"},{v: 0}, {v: 0}];
    var t7 = [ {v: "7mo+"},{v: 0}, {v: 0}];
    var t8 = [ {v: "8mo+"},{v: 0}, {v: 0}];
    var t9 = [ {v: "9mo+"},{v: 0}, {v: 0}];
    var t10= [ {v: "10mo+"},{v: 0}, {v: 0}];
    var t11= [ {v: "11mo+"},{v: 0}, {v: 0}];
    var t12= [ {v: "12mo+"},{v: 0}, {v: 0}];
  

    $scope.myChartObject.data = {"cols": [
            {id: "t", label: "Time", type: "string"},
            {id: "s", label: $scope.data.currency, type: "number"},
            {id: "u", label: "capital", type: "number"}
        ], "rows": [
            {c: t0},
            {c: t1},
            {c: t2},
            {c: t3},
            {c: t4},
            {c: t5},
            {c: t6},
            {c: t7},
    		{c: t8},
    		{c: t9},
    		{c: t10},
    		{c: t11},
    		{c: t12}
        ]
    };


    $scope.$watch(function(){

    	

    	 t0[1].v = $scope.data.mrr;
    	 t1[1].v = $scope.data.projection[0];
    	 t2[1].v = $scope.data.projection[1];
    	 t3[1].v = $scope.data.projection[2];
    	 t4[1].v = $scope.data.projection[3];
    	 t5[1].v = $scope.data.projection[4];
    	 t6[1].v = $scope.data.projection[5];
    	 t7[1].v = $scope.data.projection[6];
    	 t8[1].v = $scope.data.projection[7];
    	 t9[1].v = $scope.data.projection[8];
    	 t10[1].v = $scope.data.projection[9];
    	 t11[1].v = $scope.data.projection[10];
    	 t12[1].v = $scope.data.projection[11];


         t0[2].v = $scope.target;
         t1[2].v = $scope.target;
         t2[2].v = $scope.target;
         t3[2].v = $scope.target;
         t4[2].v = $scope.target;
         t5[2].v = $scope.target;
         t6[2].v = $scope.target;
         t7[2].v = $scope.target;
         t8[2].v = $scope.target;
         t9[2].v = $scope.target;
         t10[2].v = $scope.target;
         t11[2].v = $scope.target;
         t12[2].v = $scope.target;    	
    });


    $scope.myChartObject.options = {
  		'title': 'MRR Projection',
  		'titleTextStyle': {color: '#6EAF19', fontSize: 16},
  		'backgroundColor': '#555555',
  		legend: 'none',
		 series: {
		    0: { type: 'column', color: '#6EAF19' },
		    1: { type: 'line', color: '#e2431e' },
		 },
  		colors: ['#6EAF19', '#E2B400', '#DF0000','#DF0000','#DF0000','#DF0000','#DF0000'],
  		hAxis: { 
  			textStyle: {color: '#6EAF19', fontSize: 13,bold: false},
            gridlines: {color: '#6EAF19'},
	        textPosition: 'center'
	    },
	    vAxis:{
	    	textStyle: {color: '#6EAF19', fontSize: 13,bold: false},
	    	format: '#',
	        gridlineColor: '#6EAF19',
	        gridlines: {color: '#6EAF19'},
	        textPosition: 'center'
	   },
	}


}]);




app.service('MrrCalc',[function(){

	var balanceSheet = {
		currency: '€',
		mrr: 100,
		mrc: 30,
		churn: 1,
		cac:0,
		gei: 0.8,
		mcv: 0
	};

	var kpi = {
		gei: {success: 0, warning: 0}, rpm: {success: 0, warning: 0}, churn: {success: 0, warning: 0}
	};

	var setCurrency 			= function(a){balanceSheet.currency = a;}

	var setMRR					= function(m){balanceSheet.mrr = m;} 	//monthly recurring costs
	var setMRC					= function(m){balanceSheet.mrc = m;} 	//monthly recurring costs
	var setMonthlyChurn			= function(m){balanceSheet.churn = m;}
	var setMonthlyCAC 			= function(m){balanceSheet.cac = m;} 	// CAC monthly
	var setGEI 					= function(m){balanceSheet.gei = m;}	//Growth Efficency index 

	var calcNetMRR 				= function(mrr, churn){ var net_mrr = mrr - churn; return net_mrr;}
	var calcRPM 				= function(net_mrr,rc){var rpm = net_mrr-rc; return rpm} //recurring profit margin
	var calcMCV 				= function(cac, gei){ 

									var mcv = 0;
									if(gei > 0){
										var mcv = cac/gei;
									}
									return mcv;
									} //monthly contractual value

	var calcIncome 				= function(rpm, cac){ var income = rpm - cac; return income;}
	var calcMRRnext 			= function(mrr, churn,mcv){var mrr_next = mrr - churn +mcv; return mrr_next;}


	var calcIndex = function(){
		
		balanceSheet.churnIndex 	= balanceSheet.churn / balanceSheet.mrr;
		balanceSheet.rpmIndex 		= balanceSheet.rpm / balanceSheet.mrr;
		balanceSheet.mrrIndex 		= (balanceSheet.mrr_next - balanceSheet.mrr) / balanceSheet.mrr;
		balanceSheet.incomeIndex 	= balanceSheet.income /balanceSheet.rpm;
		balanceSheet.cacIndex 		= balanceSheet.cac/balanceSheet.rpm;
		
		return balanceSheet;
	}

	
	//create a montly projection on a given span
	var doProjection = function(count){

		var array = [];



		var tmp = balanceSheet.mrr;
		//array.push(tmp);

		for(i = 0; i<count; i++){

			var a = calcMRRnext(tmp, balanceSheet.churn, balanceSheet.mcv);
			array.push(a);
			tmp = a;
		}

		balanceSheet.projection = array;

	}

	var calcKPI_GEI = function(){
		if(balanceSheet.rpm > 0 && balanceSheet.churn > 0){
			kpi.gei.warning = balanceSheet.rpm / balanceSheet.churn;
			kpi.gei.success = 1;
		} else {
			kpi.gei.warning = 2;
			kpi.gei.success = 1;
		}

		return kpi;
	};

	var calcKPI_RPM = function(){
		if(balanceSheet.churn > 0 && balanceSheet.gei > 0){
			kpi.rpm.warning =  balanceSheet.churnIndex * balanceSheet.gei;
			kpi.rpm.success = 0.5;
		} else {
			kpi.rpm.warning = 0;
			kpi.rpm.success = 0.5 ;
		}

		return kpi;
		
	}

	var calcKPI_churn = function(){
		if( balanceSheet.rpm > 0 && balanceSheet.gei > 0){
			kpi.churn.warning = balanceSheet.rpmIndex / balanceSheet.gei;
			kpi.churn.success = 0.1;
		} else {
			kpi.churn.warning = 0.3;
			kpi.churn.success = 0.1;
		}

		return kpi;

	}

		//get balanceSheet
	var getBalanceSheet = function(){

		balanceSheet.net_mrr = calcNetMRR(balanceSheet.mrr, balanceSheet.churn);
		balanceSheet.rpm = calcRPM(balanceSheet.net_mrr, balanceSheet.mrc);
		balanceSheet.mcv = calcMCV(balanceSheet.cac,balanceSheet.gei);
		balanceSheet.income = calcIncome(balanceSheet.rpm, balanceSheet.cac);
		balanceSheet.mrr_next = calcMRRnext(balanceSheet.mrr, balanceSheet.churn, balanceSheet.mcv);
		balanceSheet = calcIndex();
		doProjection(12);


		
		
		return balanceSheet;
	}

	var getKPI = function(){
		calcKPI_GEI();
		calcKPI_RPM();
		calcKPI_churn();
		return kpi;
		
	};

	return{
		setCurrency: 			setCurrency,
		setMRR:                 setMRR,
		setMRC: 				setMRC,
		setMonthlyChurn: 		setMonthlyChurn,
		setMonthlyCAC: 			setMonthlyCAC,
		setGEI: 				setGEI,
		getBalanceSheet: 		getBalanceSheet,
		getKPI: 				getKPI,
	
		
	}




}]);

