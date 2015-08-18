routerApp.controller('studentsCtrl', [
  '$scope', '$log', '$stateParams', '$rootScope', '$modal', '$state', '$location', 'students',
  function($scope, $log, $stateParams, $rootScope, $modal, $state, $location, $students_services) {
    var _scope = {};
    _scope.init = function() {
    	$scope.students_initialized = false;
    	$scope.students = $students_services.model.get();
      $scope.name = "anil"
      $students_services.list.get($scope.students).then(
        function(response){
        $scope.students_initialized = true;
      });
    }
    $scope.$on('refresh_students', function() {
      _scope.init();
    });

    $scope.remove_student = function(student_id,student){
      var c = confirm("Do you really want to delete an student ?"+student_id);
      if (c){
        $students_services.single.remove(student_id).then(function(){
         $scope.$emit('refresh_students');
        });
      }
    }
    $scope.open = function (size) {
      $scope.size = size
      var modalInstance = $modal.open({
        templateUrl: 'students/add_student.html',
        controller: 'createStudentsCtrl',
        size: size,
        resolve: {
          students_obj: function () {
            return $scope.students;
          }
        }
      });
      modalInstance.result.then(function (student) {
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.edit_student = function(student_id) {
     $students_services.single.get(student_id, $scope.students).
      then(function(responce) {
        if(responce){
          $scope.open();
        }
     })
    }
    _scope.init();
 }
]);
