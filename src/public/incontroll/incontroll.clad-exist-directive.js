(function () {
"use strict";

angular.module('public')

//Async validation of the uniqe "Pipe" value

.directive('cladExist', CladExist);

CladExist.$inject =['$http', '$q', 'ApiPath'];
function CladExist($http, $q, ApiPath) {
  var ddo = {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.CladExist = function(modelValue, viewValue) {
        return $http.get(ApiPath + '/elements')
        .then(function(response) {
          return response.data.filter(function(item) {
            return item.serial === parseInt(scope.inCtrl.serial);
          });
        })
        .then(function(response) {
          return !response.some(function(currentValue) {
            return currentValue.clad === parseInt(modelValue);
          });
        })
        .then(function(response) {
          if (!response) {
            return $q.reject();
          }
          return true;
        });
      };
    }
  };

  return ddo;
}


})();