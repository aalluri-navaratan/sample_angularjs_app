// app.js
var routerApp = angular.module('routerApp', ['ui.router', 'ui.router.state']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/users');
  $stateProvider
  .state('root', {
    url: "",
    abstract: true,
    views: {
      'header': {
        templateUrl: '/assets/student/views/header.html',
      }
    }      
  })
  .state('root.view-profile', {
    url: "/student/:student_id",
    views: {
      'container@': {
        templateUrl: '/assets/student/views/students/show.html',
        controller: 'StudentsCtrl'
      }
    }
  })
  .state('student.profile-edit', {
    url: "/student/:student_id/edit",
    views: {
      'container@': {
        templateUrl: '/assets/student/views/students/edit.html'
      }
    }
  })
// end of the router app
});
