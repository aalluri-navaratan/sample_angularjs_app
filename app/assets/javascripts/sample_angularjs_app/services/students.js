routerApp.factory('students', ['$http', function($http) {
  var get_default = function() {
    return {
      list: [],
      single: {}
    };
  }
  return {
    model: {
      get: get_default
    }
  };
}]);