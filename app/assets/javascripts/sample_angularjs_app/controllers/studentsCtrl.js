'use strict';

stud_controler.controller('studentCtrl', [
  '$rootScope', '$scope', '$state', '$location','$modal', '$log',
  '$stateParams'
   function($rootScope, $scope, $state, $location, $modal, $log, $stateParams) {
    var _scope = {};
    _scope.init = function() {
      $scope.initialized = false;
    }
 _scope.init();
}

]);
