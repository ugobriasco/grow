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



