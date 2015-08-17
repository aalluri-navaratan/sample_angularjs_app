routerApp.controller('studentCtrl', [
  '$scope', '$stateParams', '$rootScope','$state', 'students',
  function($scope,$stateParams, $rootScope, $state, $students_services) {
    var _scope = {};
    _scope.init = function() {
    	$scope.students_initialized = false;
    	$scope.students = $students_services.model.get();
      $scope.name = "anil"
      $students_services.list.get($scope.students).then(
        function(response){
        $scope.students_initialized = true;
      });
    	console.log($scope.students);
    }
    _scope.init();
 }
]);
