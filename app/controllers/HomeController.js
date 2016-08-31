var app = angular.module('EI', ['ngRoute', 'uiGmapgoogle-maps', 'ui.knob']);

app.controller('Home', ['$rootScope', '$scope', function($rootScope, $scope){

	$scope.map = { center: { latitude: -8.0666045, longitude: -34.9370523 }, zoom: 12, id:'1' };
	$scope.options = {icon:'imagens/marker.png'};

	$scope.valueSolo = 23;
  	$scope.soloOptions = {
  	  unit: "%",
	  displayPrevious: true,
	  barCap: 25,
	  trackWidth: 30,
	  barWidth: 20,
	  trackColor: '#063e93',
	  barColor: '#fbee1e',
	  textColor: '#063e93',
	  subText: {
	    enabled: true,
	    text: 'Teor de água',
	    color: 'gray',
	    font: 'auto'
  	  },
  	  readOnly: true
	};

	$scope.valueChuva = 23;
  	$scope.chuvaOptions = {
	  displayPrevious: true,
	  trackWidth: 25,
	  barWidth: 20,
	  trackColor: '#063e93',
	  barColor: '#fbee1e',
	  textColor: '#063e93',
	  subText: {
	    enabled: true,
	    text: 'mm/h',
	    color: 'gray',
	    font: 'auto'
  	  },
  	  scale: {
    	enabled: true,
	    type: 'lines',
	    color: 'gray',
	    width: 2,
	    quantity: 20,
	    height: 10
  	  },
  	  readOnly: true
	};

}]);

app.config(['$routeProvider', '$httpProvider','uiGmapGoogleMapApiProvider','uiGmapGoogleMapApiProvider' ,function ($routeProvider, $httpProvider,GoogleMapApiProviders,uiGmapGoogleMapApiProvider) {
    GoogleMapApiProviders.configure({
            china: true
        });
    uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyD5NlE-j9QZrnSd7f-sUw9KR_i5GUabRzY',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
	 $routeProvider
		   .when('/', {
		      templateUrl : 'app/views/home.html',
		      controller     : 'Home',
		   })
		   .when('/solicitacao', {
		      templateUrl : 'app/views/solicitacao.html',
		      controller     : 'Home',
		   })
		   .otherwise ({ redirectTo: '/' });

	    // ferificando se o usuário esta logado no sistema 
	  }
    
]);
