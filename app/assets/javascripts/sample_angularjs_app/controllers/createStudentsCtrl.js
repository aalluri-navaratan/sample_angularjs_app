routerApp.controller('createStudentsCtrl', [
  '$scope', '$modalInstance', '$stateParams', '$rootScope', 'students','$state','students_obj',
  function($scope, $modalInstance , $stateParams, $rootScope, $students_service, $state, students_obj ) {
     var _scope = {};
     $scope.students = students_obj
    _scope.init = function() {
      }
  $scope.$on('refresh_students', function() {
      _scope.init();
  });
  $scope.ok = function(valid, student) {
    $scope.submitted = true;
    if(valid){
      if(isNaN(student.id)) {
        $students_service.single.create($stateParams.id, student).then(function(responce) {
          if(responce){
            $modalInstance.close();
            $rootScope.$broadcast('refresh_students');
          }
        });
      }else{
        $students_service.single.update($stateParams.id, student.id, student).then(function(responce){
          if(responce) {
            $modalInstance.close();
            $rootScope.$broadcast('refresh_students');
          }
        });
      }
    }
  }
  $scope.cancel = function() {
    $scope.student.single = {}
    $modalInstance.close();
  }
  _scope.init();
  }
]);
