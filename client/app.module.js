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
		controller: '',
		templateUrl: '/shared/partials/palette.view.html'
	}
});