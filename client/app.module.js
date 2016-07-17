var app = angular.module('app',['ngRoute','ui.router','ui.bootstrap']);


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