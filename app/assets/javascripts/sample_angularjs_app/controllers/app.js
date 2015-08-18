var routerApp = angular.module('routerApp', ['ui.router', 'ui.router.state', 'ui.bootstrap', 'ngAnimate']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/students');
	$stateProvider
	.state('students', {
    url: "",
    abstract: true,
    views: {
      'header': {
        templateUrl: '/assets/sample_angularjs_app/views/header.html',
      }
    }
  })
  .state('students.views-info', {
    url: "/students",
    views: {
      'container@': {
        templateUrl: '/assets/sample_angularjs_app/views/students/index.html'
      }
    }
  })
});
