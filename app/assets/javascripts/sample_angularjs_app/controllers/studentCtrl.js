routerApp.controller('studentCtrl', [
  '$scope', '$stateParams', '$rootScope','$state', 'students',
  function($scope,$stateParams, $rootScope, $state, $students_services) {
    var _scope = {};
    _scope.init = function() {
    	$scope.students = $students_services.model.get();
    	console.log($scope.students);
    }
    _scope.init();
 }
]);
