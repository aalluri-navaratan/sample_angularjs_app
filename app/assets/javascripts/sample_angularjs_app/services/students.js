routerApp.factory('students', ['$http', function($http) {
  var get_default = function() {
    return {
      list: [],
      single: {}
    };
  }
  var get_students_list = function (students) {
    return $http.get('/api/v1/students', {students: students}).
        success(function(response) {
          students.list = response.students;
      }).error(function(response) {
        toastr.error('There is a server error while fetching the Students list');
      });
  }
  return {
    list: {
      get: get_students_list,
    },
    model: {
      get: get_default
    }
  };
}]);