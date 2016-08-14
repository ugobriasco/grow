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