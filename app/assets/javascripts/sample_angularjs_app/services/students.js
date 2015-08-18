routerApp.factory('students', ['$http', '$q', function($http, $q) {
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
      // alert('There is a server error while fetching the Students list');
    });
  }
  var create_student = function (students) {
    return $http.post('/api/v1/students'+{students: students}).
        success(function(response) {
          if (response){
            students.single = {};
            //alert('Students has been sucessfully published');
          } else {
            alert('There were errors publishing Students');
          }
     }).error(function(response) {
        //alert('There is a server error while published and broadcasted the student');
     });
  }
  var update_student = function (student_id, students) {
    return $http.put('/api/v1/students/'+student_id, { students: students}).
          success(function(response) {
          if (response) {
            students.single = response.students;
            //alert('Students is successfully updated');
          } else {
            //alert('There were errors updating Students');
          }
     }).error(function(response) {
          //alert('There is a server error while updating an Students');
     });
  }
  var remove_student = function (student_id) {
    return $http.delete('/api/v1/students/'+student_id).
        success(function(response) {
          //alert('Student is successfully deleted');
     }).error(function(response) {
        //alert('There is a server error while deleting a Student');
     });
  }
  var get_student = function (student_id, students) {
    return $http.get('/api/v1/students/'+student_id).
        success(function(response) {
          students.single = response.student
     }).error(function(response) {
        //alert('There is a server error while geting an Student');
     });
  }
  // methods
  return {
    list: {
      get: get_students_list,
    },single: {
      create: create_student,
      update: update_student,
      remove: remove_student,
      get: get_student
    },
    model: {
      get: get_default
    }
  };
}]);